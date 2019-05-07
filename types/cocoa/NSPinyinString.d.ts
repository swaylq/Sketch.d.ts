/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPinyinString<T0 = void, T1 = void, T2 = void> extends NSString {
    nonPinyinRangeAtIndex<R = _NSRange, P0 = number>(_nonPinyinRangeAtIndex: P0): R;
    indexOfFirstModification<R = number>(): R;
    numberOfDeletions<R = number>(): R;
    numberOfInsertions<R = number>(): R;
    numberOfTranspositions<R = number>(): R;
    numberOfReplacements<R = number>(): R;
    numberOfNonPinyinRanges<R = number>(): R;
    score<R = number>(): R;
    lastSyllableIsPartial<R = boolean>(): R;
    syllableCount<R = number>(): R;
    description<R = unknown>(): R;
    nonPinyinIndexSet<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithString_syllableCount_lastSyllableIsPartial_score_replacementCount_transpositionCount_insertionCount_deletionCount_rangeCount_ranges<R = unknown, P0 = unknown, P1 = number, P2 = boolean, P3 = number, P4 = number, P5 = number, P6 = number, P7 = number, P8 = number, P9 = _NSRange>(_initWithString: P0, _syllableCount: P1, _lastSyllableIsPartial: P2, _score: P3, _replacementCount: P4, _transpositionCount: P5, _insertionCount: P6, _deletionCount: P7, _rangeCount: P8, _ranges: P9): R;
    initWithString_syllableCount_lastSyllableIsPartial_score_replacementCount_transpositionCount_insertionCount_deletionCount_indexOfFirstModification_rangeCount_ranges<R = unknown, P0 = unknown, P1 = number, P2 = boolean, P3 = number, P4 = number, P5 = number, P6 = number, P7 = number, P8 = number, P9 = number, P10 = _NSRange>(_initWithString: P0, _syllableCount: P1, _lastSyllableIsPartial: P2, _score: P3, _replacementCount: P4, _transpositionCount: P5, _insertionCount: P6, _deletionCount: P7, _indexOfFirstModification: P8, _rangeCount: P9, _ranges: P10): R;
    length<R = number>(): R;
  }
  namespace NSPinyinString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = NSPinyinString>(): R;
      new: <R = NSPinyinString>() => R;
      prefixesForInputString<R = unknown, P0 = unknown>(_prefixesForInputString: P0): R;
      alternativesForInputString<R = unknown, P0 = unknown>(_alternativesForInputString: P0): R;
      _prefixesForInputString<R = unknown, P0 = unknown>(__prefixesForInputString: P0): R;
      _alternativesForInputString<R = unknown, P0 = unknown>(__alternativesForInputString: P0): R;
    }
  }
}

declare const NSPinyinString: cocoa.NSPinyinString.CLASS;
