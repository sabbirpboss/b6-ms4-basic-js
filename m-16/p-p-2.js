function averageMarks(math, bio, che, phy, ban, totalSub) {
    const totalMarks = math + bio + che + phy + ban;
    const average = totalMarks / totalSub;
    return average;
}

 math = 72.25;
 bio = 65;
 che = 80;
 phy = 35.45;
 ban = 99.50;
 totalSub = 5;
 average = averageMarks(math, bio, che, phy, ban, totalSub);

 console.log(average.toFixed(2));