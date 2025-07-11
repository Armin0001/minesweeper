    
    

export const totalNumber = () => {
    let minePositions = [];
    while (minePositions.length < 5)
        {
        let mines = Math.floor(Math.random() * 5 * 100);
        if (minePositions[minePositions.length-1] > 256) minePositions.pop();
        console.log(minePositions, " log")
        minePositions.push(mines)
    }
    let x = 16*16;
    let y = [];
    for (let i = 1; i <= x; i++) {
        if (minePositions.includes(i)) 
        y.push("mine");
    else
        y.push(i)
            
    }
    return y;
}


