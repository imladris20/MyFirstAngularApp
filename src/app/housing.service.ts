import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'http://localhost:3000/locations';
  protected housingLocationList: HousingLocation[] = [];
  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.baseUrl);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation[]> {
    const data = await fetch(`${this.baseUrl}?id=${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
