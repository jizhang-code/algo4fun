
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
    this.winningTimes = {};
    this.persons = persons;
    this.times = times;

    var votesCount = [];

    let currentWinningPerson = -1;
    let winningVotes = 0;

    for( let i=0; i<persons.length; i++ ) {
        if( !votesCount[persons[i]] ) votesCount[persons[i]] = 0;
        votesCount[persons[i]]++;

        if( votesCount[persons[i]] >= winningVotes ) {
            currentWinningPerson = persons[i];
            winningVotes = votesCount[persons[i]];
        }
        this.winningTimes[times[i]] = currentWinningPerson;
    }
    //console.log(this.persons);
    //console.log(this.times);
    //console.log(votesCount);
    console.log(this.winningTimes);
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
    let __most_recent = Infinity;
    let ret = 0;
    this.times.forEach((time, index) => {
        let __delta = t-time;
        if( t >= time && __delta < __most_recent ) {
            __most_recent = __delta;
            ret = index;
        }
    })
    return this.winningTimes[[this.times[ret]]];
};

/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */


var topVotedCandidate = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
console.log(topVotedCandidate.q(3)); // return 0, At time 3, the votes are [0], and 0 is leading.
console.log(topVotedCandidate.q(12)); // return 1, At time 12, the votes are [0,1,1], and 1 is leading.
console.log(topVotedCandidate.q(25)); // return 1, At time 25, the votes are [0,1,1,0,0,1], and 1 is leading (as ties go to the most recent vote.)
console.log(topVotedCandidate.q(15)); // return 0
console.log(topVotedCandidate.q(24)); // return 0
console.log(topVotedCandidate.q(8)); // return 1
