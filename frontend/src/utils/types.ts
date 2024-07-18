export type TypeEmployee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  position: string;
  hire_date: string;
};

export type TypeTask = {
  id: number;
  employees: TypeEmployee[];
  title: string;
  description: string;
  status: string;
  creation_date: string;
  project_manager: number;
};
