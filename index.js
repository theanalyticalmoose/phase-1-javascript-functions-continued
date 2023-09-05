// saturdayFun Function
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // mondayWork Function Expression
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // wrapAdjective Function
  function wrapAdjective(wrapper = '*') {
    return function(adjective = '') {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    }
  }
  
  // Export these functions if you are using modules
  // module.exports = {
  //   saturdayFun,
  //   mondayWork,
  //   wrapAdjective
  // }
  