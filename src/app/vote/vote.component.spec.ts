import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    // Arrange
    let component: VoteComponent;

    beforeEach(() => {
        // Set up
        component = new VoteComponent;
    });

    afterEach(() => {
        // Tear down
    });
    beforeAll(() => {});
    afterAll(() => {});

    it('should increment totalVotes when upVoted', () => {
        // Act
        component.upVote();
        // Assert
        expect(component.totalVotes).toBe(1);
    });

    it('should decrement totalVotes when downVoted', () => {
        component.downVote();
        expect(component.totalVotes).toBe(-1);
    });

});