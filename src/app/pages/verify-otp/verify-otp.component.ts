import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {
  otp: string | null = '';
  showOtpComponent = true;
  focusToFirstElementAfterValueUpdate: boolean = false;
  errorMessage: string = ''; // Add a property for error messages

  @ViewChild(NgOtpInputComponent, { static: false }) ngOtpInput!: NgOtpInputComponent;

  config: NgOtpInputConfig = {
    allowNumbersOnly: true, // Assuming OTP should be numeric
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: ''
  };

  constructor(private router: Router) {}

  onOtpChange(otp: string): void {
    this.otp = otp;
  }

  setVal(val: string): void {
    this.ngOtpInput.setValue(val);
    if (this.focusToFirstElementAfterValueUpdate) {
      const eleId = this.ngOtpInput.getBoxId(0);
      this.ngOtpInput.focusTo(eleId);
    }
  }

  toggleDisable(): void {
    if (this.ngOtpInput.otpForm) {
      this.ngOtpInput.otpForm.disabled ? this.ngOtpInput.otpForm.enable() : this.ngOtpInput.otpForm.disable();
    }
  }

  onConfigChange(): void {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }

  onSubmit(): void {
    if (this.validateOtp()) {
      // Handle successful OTP validation logic here
      console.log('OTP Submitted:', this.otp);
      this.router.navigate(['/user-registration']);
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Please enter a valid OTP.';
    }
  }

  validateOtp(): boolean {
    const otpPattern = new RegExp(`^[0-9]{${this.config.length}}$`);
    return otpPattern.test(this.otp || '');
  }
}
