export type Post = {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  url: string;
  savanUrl: string;
  youtubeUrl: string;
  postType: string; // Possible other types if needed
  postCategoryType: string; // Extend with other categories as needed
  streamType: string;
  godId: string;
  language: string; // Extend with other supported languages
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
};
