export class MyComponent implements AfterViewInit, OnDestroy {
  observer: MutationObserver;

  @ViewChild('target', { static: true }) target: ElementRef;

  ngAfterViewInit() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        console.log(mutation);
      });
    });

    this.observer.observe(this.target.nativeElement, {
      characterData: true,
      childList: true,
      subtree: true
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
