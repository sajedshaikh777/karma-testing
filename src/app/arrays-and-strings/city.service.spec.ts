import { CityService } from './city.service'

describe('CityService', () => {

    let cityService: CityService;

    // runs before every test
    beforeEach(() => {
        // Set up
        cityService = new CityService;
    });

    // runs after every test
    afterEach(() => {
        // Tear down
        // Perform clean up activity
    });

    beforeAll(() => {});
    afterEach(() => {});

    it('should check if specified cities are present in the cities array', () => {
        let result = cityService.getCities();
        expect(result).toContain('Ambajogai');
        expect(result).toContain('Mumbai');
        expect(result).toContain('Pune');
    });

    it('should check if new city is added into the cities array', () => {
        // Arrange
        let newCity = 'Aurangabad';

        // Act
        cityService.addCity(newCity);

        // Assert
        expect(cityService.cities).toContain(newCity);
    });

});