/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLComponents<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    URLRelativeToURL<R = unknown, P0 = unknown>(_URLRelativeToURL: P0): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    initWithURL_resolvingAgainstBaseURL<R = unknown, P0 = unknown, P1 = boolean>(_initWithURL: P0, _resolvingAgainstBaseURL: P1): R;
    percentEncodedQueryItems<R = NSArray>(): R;
    setPercentEncodedQueryItems<R = void, P0 = NSArray>(_v: P0): R;
    queryItems<R = NSArray>(): R;
    setQueryItems<R = void, P0 = NSArray>(_v: P0): R;
    rangeOfFragment<R = _NSRange>(): R;
    rangeOfQuery<R = _NSRange>(): R;
    rangeOfPath<R = _NSRange>(): R;
    rangeOfPort<R = _NSRange>(): R;
    rangeOfHost<R = _NSRange>(): R;
    rangeOfPassword<R = _NSRange>(): R;
    rangeOfUser<R = _NSRange>(): R;
    rangeOfScheme<R = _NSRange>(): R;
    percentEncodedFragment<R = NSString>(): R;
    setPercentEncodedFragment<R = void, P0 = NSString>(_v: P0): R;
    percentEncodedQuery<R = NSString>(): R;
    setPercentEncodedQuery<R = void, P0 = NSString>(_v: P0): R;
    percentEncodedPath<R = NSString>(): R;
    setPercentEncodedPath<R = void, P0 = NSString>(_v: P0): R;
    percentEncodedHost<R = NSString>(): R;
    setPercentEncodedHost<R = void, P0 = NSString>(_v: P0): R;
    percentEncodedPassword<R = NSString>(): R;
    setPercentEncodedPassword<R = void, P0 = NSString>(_v: P0): R;
    percentEncodedUser<R = NSString>(): R;
    setPercentEncodedUser<R = void, P0 = NSString>(_v: P0): R;
    fragment<R = NSString>(): R;
    setFragment<R = void, P0 = NSString>(_v: P0): R;
    query<R = NSString>(): R;
    setQuery<R = void, P0 = NSString>(_v: P0): R;
    path<R = NSString>(): R;
    setPath<R = void, P0 = NSString>(_v: P0): R;
    port<R = NSNumber>(): R;
    setPort<R = void, P0 = NSNumber>(_v: P0): R;
    host<R = NSString>(): R;
    setHost<R = void, P0 = NSString>(_v: P0): R;
    password<R = NSString>(): R;
    setPassword<R = void, P0 = NSString>(_v: P0): R;
    user<R = NSString>(): R;
    setUser<R = void, P0 = NSString>(_v: P0): R;
    scheme<R = NSString>(): R;
    setScheme<R = void, P0 = NSString>(_v: P0): R;
    string<R = NSString>(): R;
    URL<R = NSURL>(): R;
  }
  namespace NSURLComponents {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSURLComponents>(): R;
      new: <R = NSURLComponents>() => R;
      componentsWithString<R = unknown, P0 = unknown>(_componentsWithString: P0): R;
      componentsWithURL_resolvingAgainstBaseURL<R = unknown, P0 = unknown, P1 = boolean>(_componentsWithURL: P0, _resolvingAgainstBaseURL: P1): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSURLComponents: cocoa.NSURLComponents.CLASS;
