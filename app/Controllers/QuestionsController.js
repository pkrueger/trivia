import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawQuestions() {
  let template = "";

  for (let question of appState.questions) {
    template += question.QuestionTemplate;
  }

  setHTML("questions", template);
}

export class QuestionsController {
  constructor() {
    appState.on("questions", _drawQuestions);
    this.getQuestions();
  }

  async getQuestions() {
    await questionsService.getQuestions();
    console.log(appState.questions);
  }
}
