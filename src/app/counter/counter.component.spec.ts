import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should add 1 when click plus button', () => {
    // given
    component.counter.count = 0;
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]');
    // when
    plusBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]');
    expect(displayCount.textContent).toEqual('number: 1');
  });

  it('should minus 1 when click minus button', () => {
    // given
    component.counter.count = 0;
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]');
    // when
    minusBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]');
    expect(displayCount.textContent).toEqual('number: -1');
  });

  it('should minus btn disappear when count number less than 0', () => {
    // given
    component.counter.count = -1;
    // when
    fixture.detectChanges();
    // then
    const minusBtn = fixture.nativeElement.querySelector('[data-test="minusBtn"]');
    expect(minusBtn).toBeFalsy();
  });

  it('should plus btn disappear when count number larger than 10', () => {
    // given
    component.counter.count = 11;
    // when
    fixture.detectChanges();
    // then
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]');
    expect(plusBtn).toBeFalsy();

  });
  
  it('should given false when count number less than 0', () => {
    // given
    component.counter.count = -1;
    // when
    expect(component.isLargeOrEqualThanZero()).toBeFalse();  
  });
  it('should given true when count number large or equal than 0', () => {
    // given
    component.counter.count = 1;
    // when
    expect(component.isLargeOrEqualThanZero()).toBeTrue();  
  });
  it('should given false when count number greater than 10', () => {
    // given
    component.counter.count = 11;
    // when
    expect(component.isLessOrEqualThanTen()).toBeFalse();  
  });
  it('should given true when count number less or equal than 10', () => {
    // given
    component.counter.count = 10;
    // when
    expect(component.isLessOrEqualThanTen()).toBeTrue();  
  });
  it('should reset 0 when click reset button', () => {
    // given
    component.counter.count = 1;
    const resetBtn = fixture.nativeElement.querySelector('[data-test="resetBtn"]');
    // when
    resetBtn.click();
    // then
    expect(component.counter.count).toEqual(0);
  });
});
