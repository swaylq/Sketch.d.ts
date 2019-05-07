/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSConcreteURLComponents<T0 = void, T1 = void, T2 = void> extends NSURLComponents, NSCopyingProtocol {
    setPercentEncodedQueryItems<R = void, P0 = unknown>(_setPercentEncodedQueryItems: P0): R;
    percentEncodedQueryItems<R = unknown>(): R;
    setQueryItems<R = void, P0 = unknown>(_setQueryItems: P0): R;
    queryItems<R = unknown>(): R;
    rangeOfFragment<R = _NSRange>(): R;
    rangeOfQuery<R = _NSRange>(): R;
    rangeOfPath<R = _NSRange>(): R;
    rangeOfPort<R = _NSRange>(): R;
    rangeOfHost<R = _NSRange>(): R;
    rangeOfPassword<R = _NSRange>(): R;
    rangeOfUser<R = _NSRange>(): R;
    rangeOfScheme<R = _NSRange>(): R;
    setPercentEncodedFragment<R = void, P0 = unknown>(_setPercentEncodedFragment: P0): R;
    percentEncodedFragment<R = unknown>(): R;
    setPercentEncodedQuery<R = void, P0 = unknown>(_setPercentEncodedQuery: P0): R;
    percentEncodedQuery<R = unknown>(): R;
    setPercentEncodedPath<R = void, P0 = unknown>(_setPercentEncodedPath: P0): R;
    percentEncodedPath<R = unknown>(): R;
    setPercentEncodedHost<R = void, P0 = unknown>(_setPercentEncodedHost: P0): R;
    percentEncodedHost<R = unknown>(): R;
    setPercentEncodedPassword<R = void, P0 = unknown>(_setPercentEncodedPassword: P0): R;
    percentEncodedPassword<R = unknown>(): R;
    setPercentEncodedUser<R = void, P0 = unknown>(_setPercentEncodedUser: P0): R;
    percentEncodedUser<R = unknown>(): R;
    setFragment<R = void, P0 = unknown>(_setFragment: P0): R;
    fragment<R = unknown>(): R;
    setQuery<R = void, P0 = unknown>(_setQuery: P0): R;
    query<R = unknown>(): R;
    setPath<R = void, P0 = unknown>(_setPath: P0): R;
    path<R = unknown>(): R;
    setPort<R = void, P0 = unknown>(_setPort: P0): R;
    port<R = unknown>(): R;
    setHost<R = void, P0 = unknown>(_setHost: P0): R;
    host<R = unknown>(): R;
    setPassword<R = void, P0 = unknown>(_setPassword: P0): R;
    password<R = unknown>(): R;
    setUser<R = void, P0 = unknown>(_setUser: P0): R;
    user<R = unknown>(): R;
    setScheme<R = void, P0 = unknown>(_setScheme: P0): R;
    scheme<R = unknown>(): R;
    string<R = unknown>(): R;
    URL<R = unknown>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    hash<R = number>(): R;
    __cfComponents<R = __CFURLComponents>(): R;
  }
  namespace __NSConcreteURLComponents {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSURLComponents, NSCopyingProtocol {
      alloc<R = __NSConcreteURLComponents>(): R;
      new: <R = __NSConcreteURLComponents>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}
