/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextCandidateOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    performCompletionHandler<R = void>(): R;
    clone<R = unknown>(): R;
    initWithString_selectedRange_offset_types_options_tag_sequenceNumber_retryCount_completionHandler<R = unknown, P0 = unknown, P1 = _NSRange, P2 = number, P3 = number, P4 = unknown, P5 = number, P6 = number, P7 = number, P8 = CDUnknownBlockType>(_initWithString: P0, _selectedRange: P1, _offset: P2, _types: P3, _options: P4, _tag: P5, _sequenceNumber: P6, _retryCount: P7, _completionHandler: P8): R;
    results<R = NSArray>(): R;
    retryCount<R = number>(): R;
    sequenceNumber<R = number>(): R;
  }
  namespace NSTextCandidateOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = NSTextCandidateOperation>(): R;
      new: <R = NSTextCandidateOperation>() => R;
    }
  }
}

declare const NSTextCandidateOperation: cocoa.NSTextCandidateOperation.CLASS;
