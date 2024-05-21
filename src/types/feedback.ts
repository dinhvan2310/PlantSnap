export interface FeedbackType {
    timestamp: number;
    feedback: string;
    detectedIncorrectly: boolean;
    statusIncorrect: boolean;
    descriptionIncorrect: boolean;
    other: boolean;
    plantid: number;
}
