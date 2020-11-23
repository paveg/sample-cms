type EyeCatch = {
  url: string;
};

export type Article = {
  id: string;
  title: string;
  content: string;
  date: string;
  eyeCatching?: EyeCatch;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
