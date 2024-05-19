
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  verified: boolean;
}

/** Constants used to fill up our data base. */
const NAMES: string[] = [
  'John', 'Jane', 'Jim', 'Jill', 'Jack', 'Jenny', 'Joe', 'Judy', 'James', 'Jessica'
];

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'mobileNumber', 'verified', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const firstName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const lastName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const mobileNumber = `123-456-${Math.floor(1000 + Math.random() * 9000).toString()}`;
  const verified = Math.random() < 0.5;

  return {
    id: id.toString(),
    firstName: firstName,
    lastName: lastName,
    mobileNumber: mobileNumber,
    verified: verified,
  };
}
