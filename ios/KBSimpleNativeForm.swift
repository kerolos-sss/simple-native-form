//
//  KBSimpleNativeForm.swift
//  KBSimpleNativeForm
//
//  Copyright © 2020 Kerolos Bisheer. All rights reserved.
//

import Foundation

@objc(KBSimpleNativeForm)
class KBSimpleNativeForm: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
