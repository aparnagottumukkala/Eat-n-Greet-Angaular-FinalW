import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataResponseDto } from 'src/models/DataResponseDto';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
  }

  getAllItems() {
    return this.http.post<DataResponseDto>(`booking/auto-suggest/all-items`, {});
  }

  getFilteredItems(value: String) {
    return this.http.post<DataResponseDto>(`booking/auto-suggest/items?str=`+value, {});
  }

  getAllItemNames() {
    return this.http.post<DataResponseDto>(`booking/auto-suggest/all-item-names`, {});
  }
}
