export type Project = {
  title: string;
  summary: string;
  thumbnailSrc: string;
  type: "web" | "server";
  year: string;
  personnel: "personal" | "team";
  url: string;
  description: string;
};