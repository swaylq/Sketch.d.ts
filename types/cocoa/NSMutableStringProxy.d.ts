/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableStringProxy<T = any> extends cocoa.NSDistantObject {
    getBytes_maxLength_usedLength_encoding_options_range_remainingRange<R = boolean, P0 = void, P1 = number, P2 = number, P3 = number, P4 = number, P5 = cocoa._NSRange, P6 = cocoa._NSRange>(_getBytes: P0, _maxLength: P1, _usedLength: P2, _encoding: P3, _options: P4, _range: P5, _remainingRange: P6): R;
    getCString<R = void, P0 = string>(_getCString: P0): R;
    getCString_maxLength<R = void, P0 = string, P1 = number>(_getCString: P0, _maxLength: P1): R;
    getCString_maxLength_range_remainingRange<R = void, P0 = string, P1 = number, P2 = cocoa._NSRange, P3 = cocoa._NSRange>(_getCString: P0, _maxLength: P1, _range: P2, _remainingRange: P3): R;
    getCharacters_range<R = void, P0 = number, P1 = cocoa._NSRange>(_getCharacters: P0, _range: P1): R;
    getCharacters<R = void, P0 = number>(_getCharacters: P0): R;
  }
  namespace classes {
    export interface NSMutableStringProxy<T = any> extends cocoa.classes.NSDistantObject {  }
  }
}

declare const NSMutableStringProxy: cocoa.classes.NSMutableStringProxy;
