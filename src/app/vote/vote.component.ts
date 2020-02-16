
export class VoteComponent {

  public totalVotes: number = 0;

  public upVote() {
    this.totalVotes++;
  }

  public downVote() {
    this.totalVotes--;
  }

}
