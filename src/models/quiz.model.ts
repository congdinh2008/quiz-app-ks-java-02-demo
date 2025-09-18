export interface QuizModel {
    id: string;
    title: string;
    description: string;
    duration: number; // in minutes
    isActive: boolean;
    numberOfQuestions: number;
    image: string; // URL or path to the image
    time: string; // e.g., "10 mins"
    thumbnailUrl: string; // URL or path to the thumbnail image
}