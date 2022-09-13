import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { saveState } from "../Utils/Store.js";
import { questionServer } from "./AxiosService.js";

class QuestionsService {
  async getQuestions() {
    const res = await questionServer.get("/api.php", {
      params: {
        amount: 10,
        category: 9,
        difficulty: "easy",
        type: "multiple",
      },
    });

    appState.questions = res.data.results.map(
      (question) => new Question(question)
    );

    saveState("questions", appState.questions);
  }
}

export const questionsService = new QuestionsService();
