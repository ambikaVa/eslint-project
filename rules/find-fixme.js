module.exports = {

 meta: {
    type: 'problem',
    schema: [
      {
        type: 'array',
        items: { type: 'string' },
      }
    ],
    docs: {
      description: 'disallow specific text in comments',
    }
  },


  create(context) {

    let options = Array.isArray(context.options) ? context.options.slice(1) : [];
    if (options.length === 0) {
      options = ["fixme", "todo"];
    } else {
      options = options.map(o => o.toLowerCase());
    }
    function findComment(comment) {
      const commentText = comment.value.toLowerCase();
      for (const keyword of options) {
        if (commentText.includes(keyword)) {
          context.report(comment, `${keyword.toUpperCase()} is not allowed in comments`);
        }
      }
    }
    return {
      Program(node) {
        let comments = context.getSourceCode().getAllComments();
        for (let c of comments) {
          findComment(c);
        }
      }
    };
  }
};