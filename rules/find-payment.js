module.exports={

   meta: {
    fixable: "code",
    type: "suggestion",
    docs: {
      description: "Disallow use of getPayments and suggest getLatestPayment instead."
    }
  },
create (context)
{
  return {

    CallExpression(node){

        if(node.callee.name==='getPayments')
        {
            context.report({
              node:node,
  message:"getpayment is deprecated. use getLatestPayemnts",
  fix: function (fixer){
return fixer.replaceText(node.callee, 'getLatestPayment')
}

            })

        }
    }
  }  
}

}