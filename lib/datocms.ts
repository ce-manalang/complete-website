// For Content Delivery API (fetching published content)
const DATOCMS_API_TOKEN = process.env.DATOCMS_API_TOKEN || '5a8da5107051ef6f1de67c6c2bf1c1';

// GraphQL endpoint for Content Delivery API
const GRAPHQL_ENDPOINT = 'https://graphql.datocms.com/';

// Simple fetch-based GraphQL client
export async function executeGraphQLQuery(query: string, variables?: Record<string, any>) {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DATOCMS_API_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }

    return data.data;
  } catch (error) {
    console.error('GraphQL query error:', error);
    throw error;
  }
}

// Types for DatoCMS content
export interface DatoCMSItem {
  id: string;
  type: string;
  attributes: Record<string, any>;
  relationships?: Record<string, any>;
}

export interface DatoCMSResponse<T> {
  data: T[];
  included?: any[];
  meta?: {
    total_count: number;
    total_pages: number;
  };
}
