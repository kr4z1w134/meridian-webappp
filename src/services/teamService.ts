import { db } from '../../db';

// Batch load team members with their roles and permissions
export async function getTeamMembersWithRolesAndPermissions(userIds: string[]) {
  if (userIds.length === 0) {
    return [];
  }

  // This is a single query that fetches all team members' data at once
  // Adjust the table and column names based on your actual schema
  const query = `
    SELECT 
      u.id as userId,
      u.name,
      u.email,
      u.role,
      u.department,
      p.permissions
    FROM users u
    LEFT JOIN user_permissions p ON u.id = p.user_id
    WHERE u.id IN (${userIds.map((_, index) => `$${index + 1}`).join(', ')})
  `;

  const result = await db.query(query, userIds);
  return result.rows;
}

// Existing function to get team member IDs (keep for backward compatibility)
export async function getTeamMemberIdsForTeam(teamId: string): Promise<string[]> {
  const query = `
    SELECT user_id 
    FROM team_members 
    WHERE team_id = $1
  `;
  
  const result = await db.query(query, [teamId]);
  return result.rows.map(row => row.user_id);
}