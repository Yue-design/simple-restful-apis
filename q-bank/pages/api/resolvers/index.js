import axios from "axios";

export const resolvers = {
  Query: {
    getQuestionList: async () => {
      try {
        const question_list = await axios.get(
          "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        );
        // return { question: question_list.data.question };
        return Object.values(question_list).map(({ question }) => ({
          question
        }));
        // const question_list = await axios.get(
        //   "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
        // );
        // return question_list.data.map(({ question }) => ({
        //   question
        // }));
      } catch (error) {
        throw error;
      }
    },
    getQuestions: async (_, args) => {
      try {
        const questions = await axios.get(
          `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean/${args.name}`
        );
        return {
          category: questions.data.category,
          question: questions.data.question
        };
      } catch (error) {
        throw error;
      }
    }
  }
};

// query: getQuestionList {
//   question
// }
