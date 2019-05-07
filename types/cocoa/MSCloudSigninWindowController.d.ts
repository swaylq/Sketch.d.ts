/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudSigninWindowController<T0 = void, T1 = void, T2 = void> extends NSWindowController {
    cxx_destruct<R = void>(): R;
    changeEnvironment<R = void, P0 = unknown>(_changeEnvironment: P0): R;
    updateEnvironmentMenuItems<R = void>(): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    signinWithLegacyAPI<R = void>(): R;
    handleAuthenticationWithUserInfo<R = void, P0 = unknown>(_handleAuthenticationWithUserInfo: P0): R;
    signinWithOAuthAPI<R = void>(): R;
    resetPassword<R = void, P0 = unknown>(_resetPassword: P0): R;
    signUp<R = void, P0 = unknown>(_signUp: P0): R;
    signIn<R = void, P0 = unknown>(_signIn: P0): R;
    windowDidLoad<R = void>(): R;
    dismissWithResult<R = void, P0 = number>(_dismissWithResult: P0): R;
    error<R = NSError>(): R;
    setError<R = void, P0 = NSError>(_v: P0): R;
    passwordField<R = NSSecureTextField>(): R;
    setPasswordField<R = void, P0 = NSSecureTextField>(_v: P0): R;
    emailField<R = NSTextField>(): R;
    setEmailField<R = void, P0 = NSTextField>(_v: P0): R;
    forgotPasswordButton<R = MSCursorButton>(): R;
    setForgotPasswordButton<R = void, P0 = MSCursorButton>(_v: P0): R;
    environmentPopUpButton<R = NSPopUpButton>(): R;
    setEnvironmentPopUpButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    titleLabel<R = NSTextField>(): R;
    setTitleLabel<R = void, P0 = NSTextField>(_v: P0): R;
    password<R = NSString>(): R;
    setPassword<R = void, P0 = NSString>(_v: P0): R;
    email<R = NSString>(): R;
    setEmail<R = void, P0 = NSString>(_v: P0): R;
    isLoading<R = boolean>(): R;
    setIsLoading<R = void, P0 = boolean>(_v: P0): R;
    environment<R = SCKAPIEnvironment>(): R;
    setEnvironment<R = void, P0 = SCKAPIEnvironment>(_v: P0): R;
  }
  namespace MSCloudSigninWindowController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController {
      alloc<R = MSCloudSigninWindowController>(): R;
      new: <R = MSCloudSigninWindowController>() => R;
    }
  }
}

declare const MSCloudSigninWindowController: cocoa.MSCloudSigninWindowController.CLASS;
