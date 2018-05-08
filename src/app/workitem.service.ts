import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { WorkItem } from './WorkItem';

@Injectable()
export class WorkitemService {
  private workitemsUrl = 'workitem';
  private addUrl = 'add';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }

    // Get all customers
    getWorkitems(): Promise<WorkItem[]> {
      return this.http.get(this.workitemsUrl)
        .toPromise()
        .then(response => response.json() as WorkItem[])
        .catch(this.handleError);
    }

    // save
    add(workitem) {

      return this.http.post(this.addUrl, JSON.stringify(workitem), { headers: this.headers })
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('Error', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}
