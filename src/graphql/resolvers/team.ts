import { DataLoader } from 'dataloader';
import { getTeamMembersWithRolesAndPermissions } from '../../services/teamService';

// Create a DataLoader for batch loading team member roles and permissions
const teamMemberLoader = new DataLoader<string, any>(async (userIds: string[]) => {
  // Batch load all team members' roles and permissions in a single query
  const teamMembers = await getTeamMembersWithRolesAndPermissions(userIds);
  
  // Create a map for quick lookup
  const memberMap = new Map<string, any>();
  teamMembers.forEach(member => {
    memberMap.set(member.userId, member);
  });
  
  // Return results in the same order as the input IDs
  return userIds.map(userId => memberMap.get(userId) || null);
});

export const teamResolver = {
  // Other resolvers...
  
  Team: {
    members: async (parent, args, context) => {
      // Get basic team member data (this would be the initial query)
      const teamMemberIds = await getTeamMemberIdsForTeam(parent.id);
      
      // Use DataLoader to batch load roles and permissions
      const teamMembersWithData = await teamMemberLoader.loadMany(teamMemberIds);
      
      return teamMembersWithData;
    }
  },
  
  // Alternative: Fix the members resolver directly if it's a root field
  Query: {
    teamMembers: async (parent, args, context) => {
      const { teamId } = args;
      
      // Get basic team member data
      const teamMemberIds = await getTeamMemberIdsForTeam(teamId);
      
      // Use DataLoader to batch load roles and permissions
      const teamMembersWithData = await teamMemberLoader.loadMany(teamMemberIds);
      
      return teamMembersWithData;
    }
  }
};

// Helper function to get team member IDs (would be implemented in your data access layer)
async function getTeamMemberIdsForTeam(teamId: string): Promise<string[]> {
  // Implementation would query the database for team member IDs
  // This is a placeholder - replace with actual implementation
  return [];
}