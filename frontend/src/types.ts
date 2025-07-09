export type Project = {
  id: string;
  userId: string;
  name: string;
  description?: string;
  members: string[];
  owner: string;
  admins: string[];
  labels: Label[];
};

export type List = {
  id: string;
  name: string;
  description?: string;
  prjectId: string;
};

export type Label = {
  id: string;
  name: string;
  bgColor: string;
  textColor: string;
  projectId: string;
  item: Item[];
};

export type Item = {
  id: string;
  name: string;
  description?: string;
  listId: string;
  typeId: string;
  label: Label[];
  priority: number;
};

export type Type = {
  id: string;
  name: string;
};
