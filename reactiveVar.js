import { BehaviorSubject } from 'rxjs';

private B = new BehaviorSubject<any>(null);
private A = new BehaviorSubject<any>({
  b: this.B.asObservable()
});

this.A.subscribe(a => {
  console.log(a);
});

// Update B
this.B.next({ value: 'new value' });
