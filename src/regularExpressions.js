// constructing it this way does not work for some reason
function dynamicRegex(keyword, stringToMatch) {
    const pattern1 = '/(?:#|\/\/)\s*(';
    const pattern2 = '.*)|\/\*\s*(';
    const pattern3 = '[\s\S]*?)\*\/|<!--\s*(';
    const pattern4 = '[\s\S]*?)-->'
    new RegExp(pattern1+keyword+pattern2+keyword+pattern3+keyword+pattern4, 'gi');
}

const todo = /(?:#|\/\/)\s*(todo.*)|\/\*\s*(todo[\s\S]*?)\*\/|<!--\s*(todo[\s\S]*?)-->/gi;

const fixme = /(?:#|\/\/)\s*(fixme.*)|\/\*\s*(fixme[\s\S]*?)\*\/|<!--\s*(fixme[\s\S]*?)-->/gi;

const task = /(?:#|\/\/)\s*(task.*)|\/\*\s*(task[\s\S]*?)\*\/|<!--\s*(task[\s\S]*?)-->/gi;

const assignment = /(?:#|\/\/)\s*(assignment.*)|\/\*\s*(assignment[\s\S]*?)\*\/|<!--\s*(assignment[\s\S]*?)-->/gi;



function getRegexes(decorationStyles) {
    return [
        { regex: todo, style: decorationStyles.todo }, 
        { regex: fixme, style: decorationStyles.fixme }, 
        { regex: task, style: decorationStyles.task }, 
        { regex: assignment, style: decorationStyles.assignment }
    ];
}

module.exports = getRegexes;
