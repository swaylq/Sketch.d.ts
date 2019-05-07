/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CMapParser<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    parseData<R = void>(): R;
    parseCmap<R = void>(): R;
    codespacerangeParseWithCount<R = void, P0 = number>(_codespacerangeParseWithCount: P0): R;
    cidrangeParseWithCount<R = void, P0 = number>(_cidrangeParseWithCount: P0): R;
    bfrangeParseWithCount<R = void, P0 = number>(_bfrangeParseWithCount: P0): R;
    cidcharParseWithCount<R = void, P0 = number>(_cidcharParseWithCount: P0): R;
    bfcharParseWithCount<R = void, P0 = number>(_bfcharParseWithCount: P0): R;
    parseOperator_withCount_block<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_parseOperator: P0, _withCount: P1, _block: P2): R;
    addRangeStart_end_to<R = void, P0 = number, P1 = number, P2 = number>(_addRangeStart: P0, _end: P1, _to: P2): R;
    addMappingFrom_to<R = void, P0 = number, P1 = number>(_addMappingFrom: P0, _to: P1): R;
    nextWord<R = unknown>(): R;
    nextInteger<R = number>(): R;
    integersFromHex<R = unknown, P0 = unknown>(_integersFromHex: P0): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    initWithStream<R = unknown, P0 = unknown>(_initWithStream: P0): R;
    integersInProgress<R = NSArray>(): R;
    setIntegersInProgress<R = void, P0 = NSArray>(_v: P0): R;
    vertical<R = boolean>(): R;
    setVertical<R = void, P0 = boolean>(_v: P0): R;
    max<R = number>(): R;
    setMax<R = void, P0 = number>(_v: P0): R;
    position<R = number>(): R;
    setPosition<R = void, P0 = number>(_v: P0): R;
    words<R = NSArray>(): R;
    setWords<R = void, P0 = NSArray>(_v: P0): R;
    source<R = NSString>(): R;
    setSource<R = void, P0 = NSString>(_v: P0): R;
    map<R = NSMutableDictionary>(): R;
    setMap<R = void, P0 = NSMutableDictionary>(_v: P0): R;
  }
  namespace CMapParser {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = CMapParser>(): R;
      new: <R = CMapParser>() => R;
    }
  }
}

declare const CMapParser: cocoa.CMapParser.CLASS;
