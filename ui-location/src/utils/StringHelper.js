function removeWhiteSpace(value) {  
    return value && value.includes(" ") ? value.replace(/\s/g, "") : value; 
}

export {removeWhiteSpace}