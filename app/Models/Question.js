export class Question {
  /**
   *
   * @param {{correct_answer: string, incorrect_answers: Array, question: string}} data
   */
  constructor(data) {
    this.correct_answer = data.correct_answer;
    this.incorrect_answers = data.incorrect_answers;
    this.question = data.question;
  }

  get QuestionTemplate() {
    return /*html*/ `
      <div class="col-md-6">
        <div class="card my-2">
          <div class="card-body">
            <p>Q: ${this.question}</p>
            <div class="row">
              <div class="col-6 mb-2 correct-answer order-${Math.floor(
                Math.random() * 4
              )}">${this.correct_answer}</div>
              <div class="col-6 mb-2 order-${Math.floor(Math.random() * 4)}">${
      this.incorrect_answers[0]
    }</div>
              <div class="col-6 mb-2 order-${Math.floor(Math.random() * 4)}">${
      this.incorrect_answers[1]
    }</div>
              <div class="col-6 mb-2 order-${Math.floor(Math.random() * 4)}">${
      this.incorrect_answers[2]
    }</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
