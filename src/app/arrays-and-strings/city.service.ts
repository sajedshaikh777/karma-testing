export class CityService {
    public cities = ['Pune', 'Mumbai', 'Ambajogai'];

    public getCities() {
        return this.cities;
    }

    public addCity(city: string) {
        this.cities.push(city);
    }

}