// type for github response
export type gitApiResponse = {
  active_lock_reason: number;
  assignee: number;
  assignees: [];
  author_association: string;
  body: string;
  closed_at: number;
  comments: number;
  comments_url: string;
  created_at: string;
  events_url: string;
  html_url: string;
  id: number;
  labels: [
    {
      color: string;
      default: boolean;
      description: string;
      id: number;
      name: string;
      node_id: string;
      url: string;
    }
  ];
  labels_url: string;
  locked: boolean;
  milestone: number;
  node_id: string;
  number: number;
  performed_via_github_app: number;
  reactions: {
    "+1": number;
    "-1": number;
    confused: number;
    eyes: number;
    heart: number;
    hooray: number;
    laugh: number;
    rocket: number;
    total_count: number;
    url: string;
  };
  repository_url: string;
  state: string;
  timeline_url: string;
  title: string;
  updated_at: string;
  url: string;
  user: {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions: string;
    type: string;
    url: string;
  };
};
