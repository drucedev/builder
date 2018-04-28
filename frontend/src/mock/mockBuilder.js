export default [{
  "name": "ru.sbrf.bh.banking.product.pcredit.request.fg.SbrfPersonalCreditRequestFactoryFgService#0",
  "methods": [{
    "name": "changeStatus",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.ufs.platform.core.exception.PlatformException", "java.util.concurrent.TimeoutException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor", {
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }], "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }]
      }
    }]
  }, {
    "name": "process",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.ufs.platform.core.exception.PlatformException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor", {
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }], "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }]
      }
    }]
  }, {
    "name": "updateOffer",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.ufs.platform.core.exception.PlatformException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor", {
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }], "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }]
      }
    }]
  }, {
    "name": "validate",
    "response": {
      "success": {
        "example": [["java.util.Set", {}]],
        "description": {"className": "java.util.Set", "properties": []}
      }, "exceptions": []
    },
    "requestParameters": [{
      "example": [["[Ljava.lang.Class;", {}]],
      "description": {"className": "[Ljava.lang.Class;", "properties": []}
    }, {
      "example": [["java.lang.Object", {}]],
      "description": {"className": "java.lang.Object", "properties": []}
    }, {
      "example": [["java.lang.String", {"hash": null, "value": ["[C", [null]], "hash32": null}]],
      "description": {
        "className": "java.lang.String",
        "properties": [{"type": null, "className": "int", "name": "hash32", "value": null}, {
          "type": "array",
          "className": "[C",
          "name": "value",
          "value": ["[C", [null]]
        }, {"type": null, "className": "int", "name": "hash", "value": null}]
      }
    }]
  }, {
    "name": "validateChangeStatus",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.bh.banking.product.pcredit.request.exceptions.PersonalCreditRequestValidationException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor", {
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }], "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }]
      }
    }]
  }, {
    "name": "validateList",
    "response": {
      "success": {
        "example": [["java.util.Set", {}]],
        "description": {"className": "java.util.Set", "properties": []}
      }, "exceptions": []
    },
    "requestParameters": [{
      "example": [["[Ljava.lang.Class;", {}]],
      "description": {"className": "[Ljava.lang.Class;", "properties": []}
    }, {
      "example": [["java.util.List", {}]],
      "description": {"className": "java.util.List", "properties": []}
    }, {
      "example": [["java.lang.String", {"hash": null, "value": ["[C", [null]], "hash32": null}]],
      "description": {
        "className": "java.lang.String",
        "properties": [{"type": null, "className": "int", "name": "hash32", "value": null}, {
          "type": "array",
          "className": "[C",
          "name": "value",
          "value": ["[C", [null]]
        }, {"type": null, "className": "int", "name": "hash", "value": null}]
      }
    }]
  }, {
    "name": "validatePerson",
    "response": {
      "success": {
        "example": [["java.util.Set", {}]],
        "description": {"className": "java.util.Set", "properties": []}
      }, "exceptions": []
    },
    "requestParameters": [{
      "example": [["int", {}]],
      "description": {"className": "int", "properties": []}
    }, {
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonalCreditPerson", {
        "eribLoginId": "abc",
        "documentCheckInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.DocumentCheckInfo", {
          "documentCheck": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.DocumentCheck", {
            "finDocOther": false,
            "fakePagesNum": false,
            "finDocCorrection": false,
            "docFake": false,
            "photoOrnDiff": false,
            "infoRemove": false,
            "workNumber": false,
            "differences": false,
            "passportSpecComment": "abc",
            "paperFiber": false,
            "drawing": false,
            "photoFake": false,
            "finDocText": false,
            "passportStructureCheck": false,
            "otherFake": false,
            "fourthPagePaper": false,
            "photoText": false,
            "finDocFake": false,
            "ornamentPhoto": false,
            "workSeries": false,
            "workFake": false,
            "workNameOnStamp": false,
            "finDocComment": "abc",
            "infoAdd": false,
            "passportSpecial": false,
            "workComment": "abc",
            "thickPaper": false,
            "signatureFake": false,
            "selfmadeStamp": false,
            "workOther": false,
            "signatureComment": "abc",
            "workText": false,
            "filmSwelling": false,
            "finDocCorpName": false,
            "otherStructureFake": false,
            "secondPageStamp": false,
            "fakePagesDocNumber": false,
            "fakePages": false,
            "fakeComment": "abc",
            "textEtc": false,
            "photoOrnStamp": false,
            "structureComment": "abc",
            "strangeLine": false
          }],
          "сheckDate": ["java.util.GregorianCalendar", 0],
          "checkByKI": false,
          "сheckComment": "abc",
          "сheckEmployee": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
            "middleName": "abc",
            "noMiddleName": false,
            "lastName": "abc",
            "fullName": "abc",
            "firstName": "abc"
          }]
        }],
        "specialAttentionClient": false,
        "personResources": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
          "directDebit": false,
          "accountNumber": "abc",
          "priority": 0,
          "name": "abc",
          "resourceType": "ACCOUNT",
          "cardNumber": "abc"
        }]]],
        "citizenship": "abc",
        "anketaType": "SHORT",
        "actualBaseInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
          "middleName": "abc",
          "noMiddleName": false,
          "lastName": "abc",
          "fullName": "abc",
          "firstName": "abc"
        }],
        "familyInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.FamilyInfo", {
          "childrenCount": 0,
          "hasChildren": false,
          "spouseInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.RelativePerson", {
            "hasSberbankCredit": "NO",
            "relativeType": "MOTHER",
            "dependent": false,
            "birthDate": ["java.util.GregorianCalendar", 0],
            "baseInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
              "middleName": "abc",
              "noMiddleName": false,
              "lastName": "abc",
              "fullName": "abc",
              "firstName": "abc"
            }]
          }],
          "childrenFlag": "abc",
          "relatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.RelativePerson", {
            "hasSberbankCredit": "NO",
            "relativeType": "MOTHER",
            "dependent": false,
            "birthDate": ["java.util.GregorianCalendar", 0],
            "baseInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
              "middleName": "abc",
              "noMiddleName": false,
              "lastName": "abc",
              "fullName": "abc",
              "firstName": "abc"
            }]
          }]]],
          "maritalStatus": "SINGLE"
        }],
        "employeeInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.EmploymentInfo", {
          "totalExperienceMonths": 0,
          "jobType": "TOP_MANAGER",
          "terbankCode": "abc",
          "status": "TIMED_CONTRACT",
          "workPlacesCount": 0,
          "privateDescription": "abc",
          "workPlacesCountYear3": 0,
          "experiencePeriod": "MONTH_6_12",
          "terbankPresident": false,
          "history": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.EmploymentHistory", {
            "startDate": ["java.util.GregorianCalendar", 0],
            "organization": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
              "inn": "abc",
              "orgCode": "abc",
              "name": "abc",
              "employeeCount": "LESS_10",
              "sectorDescription": "abc",
              "sectorCode": "abc"
            }],
            "transferDate": ["java.util.GregorianCalendar", 0],
            "endDate": ["java.util.GregorianCalendar", 0],
            "jobTitle": "abc"
          }]]],
          "organization": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
            "inn": "abc",
            "orgCode": "abc",
            "name": "abc",
            "employeeCount": "LESS_10",
            "sectorDescription": "abc",
            "sectorCode": "abc"
          }],
          "confirmedExperience5YMonths": 0,
          "sberbankEmployee": false,
          "totalExperienceYears": 0,
          "workBook": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Document", {
            "manualChanged": false,
            "issuedCode": "abc",
            "series": "abc",
            "duplicate": false,
            "actual": false,
            "number": "abc",
            "issuedBy": "abc",
            "issuedDate": ["java.util.GregorianCalendar", 0]
          }],
          "sberbankDepartment": "abc",
          "confirmedExperienceMonths": 0,
          "confirmedExperienceYears": 0,
          "confirmedExperience5YYears": 0,
          "jobTitle": "abc"
        }],
        "education": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Education", {
          "course": 0,
          "status": "DEGREE"
        }],
        "birthPlace": "abc",
        "sequenceNumber": 0,
        "visualCheckInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.VisualCheckInfo", {
          "сheckDate": ["java.util.GregorianCalendar", 0],
          "checkByKI": false,
          "visualChecks": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.VisualCheck", {
            "checkAnswer": "NO",
            "comment": "abc",
            "checkType": "SUPPORT"
          }]]],
          "сheckComment": "abc",
          "сheckEmployee": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
            "middleName": "abc",
            "noMiddleName": false,
            "lastName": "abc",
            "fullName": "abc",
            "firstName": "abc"
          }]
        }],
        "assetInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.AssetInfo", {
          "hasVehicle": false,
          "realties": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.RealEstate", {
            "realEstateType": "ROOM",
            "cost": ["java.math.BigDecimal", 0.0]
          }]]],
          "hasRealty": false,
          "vehicles": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Vehicle", {
            "vehicleType": "GROUND",
            "purchaceYear": 0,
            "cost": ["java.math.BigDecimal", 0.0]
          }]]]
        }],
        "signDate": ["java.util.GregorianCalendar", 0],
        "contactInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.ContactInfo", {
          "cityActualPeriod": 0,
          "email": "abc",
          "addressActualPeriod": 0,
          "residenceExpDate": ["java.util.GregorianCalendar", 0],
          "residenceRight": "OWN",
          "residenceEquals": false,
          "addresses": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Address", {
            "region": "abc",
            "streetFullName": "abc",
            "noFlat": false,
            "street": "abc",
            "houseExt": "abc",
            "city": "abc",
            "cityFullName": "abc",
            "postalCode": "abc",
            "area": "abc",
            "houseUnit": "abc",
            "houseNum": "abc",
            "areaType": "abc",
            "streetKladrCode": "abc",
            "cityType": "abc",
            "kladrCode": "abc",
            "streetType": "abc",
            "regionCode": "abc",
            "houseFull": "abc",
            "settlementType": "abc",
            "manualInput": false,
            "flat": "abc",
            "settlement": "abc",
            "addressType": "PERM_REGISTRATION",
            "cityKladrCode": "abc",
            "noStreet": false,
            "noHouse": false
          }]]],
          "tempRegEquals": false,
          "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
            "countryPrefix": "abc",
            "fullNumber": "abc",
            "phoneType": "MOBILE",
            "additional": null,
            "prefix": "abc",
            "number": "abc"
          }]]]
        }],
        "hasExtPassport": false,
        "gender": "MALE",
        "personId": "abc",
        "role": "MAINDEBITOR",
        "birthDate": ["java.util.GregorianCalendar", 0],
        "paymentResources": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
          "directDebit": false,
          "accountNumber": "abc",
          "priority": 0,
          "name": "abc",
          "resourceType": "ACCOUNT",
          "cardNumber": "abc"
        }]]],
        "inn": "abc",
        "frontCategory": "EMPLOYEE",
        "identityCards": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Document", {
          "manualChanged": false,
          "issuedCode": "abc",
          "series": "abc",
          "duplicate": false,
          "actual": false,
          "number": "abc",
          "issuedBy": "abc",
          "issuedDate": ["java.util.GregorianCalendar", 0]
        }]]],
        "financeStatements": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.FinanceStatement", {
          "organization": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
            "inn": "abc",
            "orgCode": "abc",
            "name": "abc",
            "employeeCount": "LESS_10",
            "sectorDescription": "abc",
            "sectorCode": "abc"
          }],
          "contactPhone": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
            "countryPrefix": "abc",
            "fullNumber": "abc",
            "phoneType": "MOBILE",
            "additional": null,
            "prefix": "abc",
            "number": "abc"
          }],
          "signer": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
            "middleName": "abc",
            "noMiddleName": false,
            "lastName": "abc",
            "fullName": "abc",
            "firstName": "abc"
          }],
          "signerPositionDescription": "abc",
          "statementDate": ["java.util.GregorianCalendar", 0],
          "statementType": "INCOME_PHISIC_TAX",
          "signerPosition": "DIRECTOR",
          "avgAmount": ["java.math.BigDecimal", 0.0]
        }]]],
        "mdmId": "abc",
        "odrRecognition": "OK",
        "changeParticipant": false,
        "deleted": false,
        "loans": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonLoanInfo", {
          "sumApproved": ["java.math.BigDecimal", 0.0],
          "startDate": ["java.util.GregorianCalendar", 0],
          "paymentType": "ANNUITY",
          "endDate": ["java.util.GregorianCalendar", 0],
          "number": "abc",
          "currency": "abc",
          "sourceId": "abc",
          "amount": ["java.math.BigDecimal", 0.0],
          "bankInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.BankInfo", {
            "corAccount": "abc",
            "name": "abc",
            "bik": "abc"
          }],
          "approved": false,
          "rate": ["java.math.BigDecimal", 0.0],
          "loanType": "EXTERNAL",
          "loanExternalAccount": "abc",
          "account": "abc",
          "contractId": "abc",
          "loanProductType": "CAR",
          "restDebt": ["java.math.BigDecimal", 0.0]
        }]]],
        "ecmFolderId": "abc",
        "approvals": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonApproval", {
          "approved": false,
          "approvalType": "BKI_GET"
        }]]],
        "category": "EMPLOYEE",
        "epkId": "abc",
        "blockId": "abc",
        "snils": "abc",
        "financeIncomes": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.FinanceIncome", {
          "amount": ["java.math.BigDecimal", 0.0],
          "incomeType": "BASIC_INCOME"
        }]]],
        "changeBaseInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.ChangeBaseInfo", {
          "fioChangeReason": "MARRIAGE",
          "previosBaseInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
            "middleName": "abc",
            "noMiddleName": false,
            "lastName": "abc",
            "fullName": "abc",
            "firstName": "abc"
          }],
          "fioChangeDate": ["java.util.GregorianCalendar", 0],
          "fioChanged": false
        }],
        "lendingCapacityInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.LendingCapacityInfo", {
          "amount": ["java.math.BigDecimal", 0.0],
          "rate": ["java.math.BigDecimal", 0.0],
          "capacityRequestId": "abc",
          "term": 0,
          "capacityDate": ["java.util.GregorianCalendar", 0],
          "hasActualCapacity": false
        }]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonalCreditPerson",
        "properties": [{
          "type": "integer",
          "className": "java.lang.Integer",
          "name": "sequenceNumber",
          "value": 0
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.party.ChangeBaseInfo",
          "name": "changeBaseInfo",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.ChangeBaseInfo", {
            "fioChangeReason": "MARRIAGE",
            "previosBaseInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
              "middleName": "abc",
              "noMiddleName": false,
              "lastName": "abc",
              "fullName": "abc",
              "firstName": "abc"
            }],
            "fioChangeDate": ["java.util.GregorianCalendar", 0],
            "fioChanged": false
          }]
        }, {"type": "string", "className": "java.lang.String", "name": "blockId", "value": "abc"}, {
          "type": "string",
          "className": "java.lang.String",
          "name": "personId",
          "value": "abc"
        }, {
          "type": "array",
          "className": "java.util.List",
          "name": "identityCards",
          "value": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Document", {
            "manualChanged": false,
            "issuedCode": "abc",
            "series": "abc",
            "duplicate": false,
            "actual": false,
            "number": "abc",
            "issuedBy": "abc",
            "issuedDate": ["java.util.GregorianCalendar", 0]
          }]]]
        }, {
          "type": "string",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.GenderType",
          "name": "gender",
          "values": ["MALE", "FEMALE"]
        }, {
          "type": "string",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.PersonCategory",
          "name": "category",
          "values": ["EMPLOYEE", "SALARY", "STREET", "PENSION", "UNCONFIRM", "UNKNOWN"]
        }, {
          "type": "array",
          "className": "java.util.List",
          "name": "approvals",
          "value": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonApproval", {
            "approved": false,
            "approvalType": "BKI_GET"
          }]]]
        }, {
          "type": "boolean",
          "className": "java.lang.Boolean",
          "name": "specialAttentionClient",
          "value": false
        }, {"type": "string", "className": "java.lang.String", "name": "snils", "value": "abc"}, {
          "type": "string",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.AnketaType",
          "name": "anketaType",
          "values": ["SHORT", "COMPLETE"]
        }, {
          "type": "string",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.ODRRecognitionResult",
          "name": "odrRecognition",
          "values": ["OK", "NO", "ERROR"]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.party.AssetInfo",
          "name": "assetInfo",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.AssetInfo", {
            "hasVehicle": false,
            "realties": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.RealEstate", {
              "realEstateType": "ROOM",
              "cost": ["java.math.BigDecimal", 0.0]
            }]]],
            "hasRealty": false,
            "vehicles": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Vehicle", {
              "vehicleType": "GROUND",
              "purchaceYear": 0,
              "cost": ["java.math.BigDecimal", 0.0]
            }]]]
          }]
        }, {
          "type": "boolean",
          "className": "java.lang.Boolean",
          "name": "hasExtPassport",
          "value": false
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "signDate",
          "value": ["java.util.GregorianCalendar", 0]
        }, {
          "type": "boolean",
          "className": "java.lang.Boolean",
          "name": "changeParticipant",
          "value": false
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.party.LendingCapacityInfo",
          "name": "lendingCapacityInfo",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.LendingCapacityInfo", {
            "amount": ["java.math.BigDecimal", 0.0],
            "rate": ["java.math.BigDecimal", 0.0],
            "capacityRequestId": "abc",
            "term": 0,
            "capacityDate": ["java.util.GregorianCalendar", 0],
            "hasActualCapacity": false
          }]
        }, {"type": "string", "className": "java.lang.String", "name": "epkId", "value": "abc"}, {
          "type": "array",
          "className": "java.util.List",
          "name": "financeStatements",
          "value": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.FinanceStatement", {
            "organization": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
              "inn": "abc",
              "orgCode": "abc",
              "name": "abc",
              "employeeCount": "LESS_10",
              "sectorDescription": "abc",
              "sectorCode": "abc"
            }],
            "contactPhone": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
              "countryPrefix": "abc",
              "fullNumber": "abc",
              "phoneType": "MOBILE",
              "additional": null,
              "prefix": "abc",
              "number": "abc"
            }],
            "signer": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
              "middleName": "abc",
              "noMiddleName": false,
              "lastName": "abc",
              "fullName": "abc",
              "firstName": "abc"
            }],
            "signerPositionDescription": "abc",
            "statementDate": ["java.util.GregorianCalendar", 0],
            "statementType": "INCOME_PHISIC_TAX",
            "signerPosition": "DIRECTOR",
            "avgAmount": ["java.math.BigDecimal", 0.0]
          }]]]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.party.ContactInfo",
          "name": "contactInfo",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.ContactInfo", {
            "cityActualPeriod": 0,
            "email": "abc",
            "addressActualPeriod": 0,
            "residenceExpDate": ["java.util.GregorianCalendar", 0],
            "residenceRight": "OWN",
            "residenceEquals": false,
            "addresses": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Address", {
              "region": "abc",
              "streetFullName": "abc",
              "noFlat": false,
              "street": "abc",
              "houseExt": "abc",
              "city": "abc",
              "cityFullName": "abc",
              "postalCode": "abc",
              "area": "abc",
              "houseUnit": "abc",
              "houseNum": "abc",
              "areaType": "abc",
              "streetKladrCode": "abc",
              "cityType": "abc",
              "kladrCode": "abc",
              "streetType": "abc",
              "regionCode": "abc",
              "houseFull": "abc",
              "settlementType": "abc",
              "manualInput": false,
              "flat": "abc",
              "settlement": "abc",
              "addressType": "PERM_REGISTRATION",
              "cityKladrCode": "abc",
              "noStreet": false,
              "noHouse": false
            }]]],
            "tempRegEquals": false,
            "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
              "countryPrefix": "abc",
              "fullNumber": "abc",
              "phoneType": "MOBILE",
              "additional": null,
              "prefix": "abc",
              "number": "abc"
            }]]]
          }]
        }, {
          "type": "string",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.PersonRole",
          "name": "role",
          "values": ["MAINDEBITOR", "COBORROWER", "GUARANTOR"]
        }, {
          "type": "array",
          "className": "java.util.List",
          "name": "financeIncomes",
          "value": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.FinanceIncome", {
            "amount": ["java.math.BigDecimal", 0.0],
            "incomeType": "BASIC_INCOME"
          }]]]
        }, {
          "type": "string",
          "className": "java.lang.String",
          "name": "birthPlace",
          "value": "abc"
        }, {"type": "boolean", "className": "java.lang.Boolean", "name": "deleted", "value": false}, {
          "type": "array",
          "className": "java.util.List",
          "name": "loans",
          "value": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonLoanInfo", {
            "sumApproved": ["java.math.BigDecimal", 0.0],
            "startDate": ["java.util.GregorianCalendar", 0],
            "paymentType": "ANNUITY",
            "endDate": ["java.util.GregorianCalendar", 0],
            "number": "abc",
            "currency": "abc",
            "sourceId": "abc",
            "amount": ["java.math.BigDecimal", 0.0],
            "bankInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.BankInfo", {
              "corAccount": "abc",
              "name": "abc",
              "bik": "abc"
            }],
            "approved": false,
            "rate": ["java.math.BigDecimal", 0.0],
            "loanType": "EXTERNAL",
            "loanExternalAccount": "abc",
            "account": "abc",
            "contractId": "abc",
            "loanProductType": "CAR",
            "restDebt": ["java.math.BigDecimal", 0.0]
          }]]]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.party.DocumentCheckInfo",
          "name": "documentCheckInfo",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.DocumentCheckInfo", {
            "documentCheck": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.DocumentCheck", {
              "finDocOther": false,
              "fakePagesNum": false,
              "finDocCorrection": false,
              "docFake": false,
              "photoOrnDiff": false,
              "infoRemove": false,
              "workNumber": false,
              "differences": false,
              "passportSpecComment": "abc",
              "paperFiber": false,
              "drawing": false,
              "photoFake": false,
              "finDocText": false,
              "passportStructureCheck": false,
              "otherFake": false,
              "fourthPagePaper": false,
              "photoText": false,
              "finDocFake": false,
              "ornamentPhoto": false,
              "workSeries": false,
              "workFake": false,
              "workNameOnStamp": false,
              "finDocComment": "abc",
              "infoAdd": false,
              "passportSpecial": false,
              "workComment": "abc",
              "thickPaper": false,
              "signatureFake": false,
              "selfmadeStamp": false,
              "workOther": false,
              "signatureComment": "abc",
              "workText": false,
              "filmSwelling": false,
              "finDocCorpName": false,
              "otherStructureFake": false,
              "secondPageStamp": false,
              "fakePagesDocNumber": false,
              "fakePages": false,
              "fakeComment": "abc",
              "textEtc": false,
              "photoOrnStamp": false,
              "structureComment": "abc",
              "strangeLine": false
            }],
            "сheckDate": ["java.util.GregorianCalendar", 0],
            "checkByKI": false,
            "сheckComment": "abc",
            "сheckEmployee": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
              "middleName": "abc",
              "noMiddleName": false,
              "lastName": "abc",
              "fullName": "abc",
              "firstName": "abc"
            }]
          }]
        }, {"type": "string", "className": "java.lang.String", "name": "mdmId", "value": "abc"}, {
          "type": "string",
          "className": "java.lang.String",
          "name": "eribLoginId",
          "value": "abc"
        }, {
          "type": "string",
          "className": "java.lang.String",
          "name": "citizenship",
          "value": "abc"
        }, {
          "type": "string",
          "className": "java.lang.String",
          "name": "ecmFolderId",
          "value": "abc"
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.party.Education",
          "name": "education",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Education", {"course": 0, "status": "DEGREE"}]
        }, {
          "type": "array",
          "className": "java.util.List",
          "name": "paymentResources",
          "value": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
            "directDebit": false,
            "accountNumber": "abc",
            "priority": 0,
            "name": "abc",
            "resourceType": "ACCOUNT",
            "cardNumber": "abc"
          }]]]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.party.EmploymentInfo",
          "name": "employeeInfo",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.EmploymentInfo", {
            "totalExperienceMonths": 0,
            "jobType": "TOP_MANAGER",
            "terbankCode": "abc",
            "status": "TIMED_CONTRACT",
            "workPlacesCount": 0,
            "privateDescription": "abc",
            "workPlacesCountYear3": 0,
            "experiencePeriod": "MONTH_6_12",
            "terbankPresident": false,
            "history": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.EmploymentHistory", {
              "startDate": ["java.util.GregorianCalendar", 0],
              "organization": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "transferDate": ["java.util.GregorianCalendar", 0],
              "endDate": ["java.util.GregorianCalendar", 0],
              "jobTitle": "abc"
            }]]],
            "organization": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
              "inn": "abc",
              "orgCode": "abc",
              "name": "abc",
              "employeeCount": "LESS_10",
              "sectorDescription": "abc",
              "sectorCode": "abc"
            }],
            "confirmedExperience5YMonths": 0,
            "sberbankEmployee": false,
            "totalExperienceYears": 0,
            "workBook": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Document", {
              "manualChanged": false,
              "issuedCode": "abc",
              "series": "abc",
              "duplicate": false,
              "actual": false,
              "number": "abc",
              "issuedBy": "abc",
              "issuedDate": ["java.util.GregorianCalendar", 0]
            }],
            "sberbankDepartment": "abc",
            "confirmedExperienceMonths": 0,
            "confirmedExperienceYears": 0,
            "confirmedExperience5YYears": 0,
            "jobTitle": "abc"
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo",
          "name": "actualBaseInfo",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
            "middleName": "abc",
            "noMiddleName": false,
            "lastName": "abc",
            "fullName": "abc",
            "firstName": "abc"
          }]
        }, {"type": "string", "className": "java.lang.String", "name": "inn", "value": "abc"}, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.party.FamilyInfo",
          "name": "familyInfo",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.FamilyInfo", {
            "childrenCount": 0,
            "hasChildren": false,
            "spouseInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.RelativePerson", {
              "hasSberbankCredit": "NO",
              "relativeType": "MOTHER",
              "dependent": false,
              "birthDate": ["java.util.GregorianCalendar", 0],
              "baseInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
                "middleName": "abc",
                "noMiddleName": false,
                "lastName": "abc",
                "fullName": "abc",
                "firstName": "abc"
              }]
            }],
            "childrenFlag": "abc",
            "relatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.RelativePerson", {
              "hasSberbankCredit": "NO",
              "relativeType": "MOTHER",
              "dependent": false,
              "birthDate": ["java.util.GregorianCalendar", 0],
              "baseInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
                "middleName": "abc",
                "noMiddleName": false,
                "lastName": "abc",
                "fullName": "abc",
                "firstName": "abc"
              }]
            }]]],
            "maritalStatus": "SINGLE"
          }]
        }, {
          "type": "array",
          "className": "java.util.List",
          "name": "personResources",
          "value": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
            "directDebit": false,
            "accountNumber": "abc",
            "priority": 0,
            "name": "abc",
            "resourceType": "ACCOUNT",
            "cardNumber": "abc"
          }]]]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.party.VisualCheckInfo",
          "name": "visualCheckInfo",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.VisualCheckInfo", {
            "сheckDate": ["java.util.GregorianCalendar", 0],
            "checkByKI": false,
            "visualChecks": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.VisualCheck", {
              "checkAnswer": "NO",
              "comment": "abc",
              "checkType": "SUPPORT"
            }]]],
            "сheckComment": "abc",
            "сheckEmployee": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.PersonBaseInfo", {
              "middleName": "abc",
              "noMiddleName": false,
              "lastName": "abc",
              "fullName": "abc",
              "firstName": "abc"
            }]
          }]
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "birthDate",
          "value": ["java.util.GregorianCalendar", 0]
        }, {
          "type": "string",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.PersonCategory",
          "name": "frontCategory",
          "values": ["EMPLOYEE", "SALARY", "STREET", "PENSION", "UNCONFIRM", "UNKNOWN"]
        }]
      }
    }]
  }, {
    "name": "validateProcess",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.bh.banking.product.pcredit.request.exceptions.PersonalCreditRequestValidationException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor", {
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }], "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }]
      }
    }]
  }, {
    "name": "validateUpdateOffer",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.bh.banking.product.pcredit.request.exceptions.PersonalCreditRequestValidationException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor", {
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }], "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }]
      }
    }]
  }]
}, {
  "name": "ru.sbrf.bh.banking.product.pcredit.request.fg.SbrfPersonalCreditRequestHistoryFgService#0",
  "methods": [{
    "name": "create",
    "response": {
      "success": {
        "example": [["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }]],
        "description": {
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "properties": [{
            "type": "array",
            "className": "java.util.List",
            "name": "agreements",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]]
          }, {
            "type": "string",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.ProcessingSystem",
            "name": "processingSystem",
            "values": ["UFS", "TSM", "CRM"]
          }, {
            "type": "object",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo",
            "name": "sourceSystemInfo",
            "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }]
          }, {
            "type": "string",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.PersonCategory",
            "name": "requestCategory",
            "values": ["EMPLOYEE", "SALARY", "STREET", "PENSION", "UNCONFIRM", "UNKNOWN"]
          }, {
            "type": "object",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo",
            "name": "issueInfo",
            "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }]
          }, {
            "type": "integer",
            "className": "java.lang.Integer",
            "name": "guarantorChangeCounter",
            "value": 0
          }, {
            "type": "object",
            "className": "ru.sbrf.uam.services.status.RequestChannelState",
            "name": "state",
            "value": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }]
          }, {
            "type": "string",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.RequestStatus",
            "name": "requestStatus",
            "values": ["REFUSED", "MORATORY", "REFUSED_CLIENT", "APPROVED", "DISPATCHED", "DISPATCHED_CP", "EXECUTED", "PREADOPTED", "ACCEPTED_WAIT_DELIVERY", "VISIT_REQUIRED", "NEED_UPDATE", "REFUSED_NOTIFICATION", "APPROVAL_NOTIFICATION", "APPROVAL_NOTIFICATION_CHANGE_US", "REFUSED_NOTIFICATION_CHANGE_US", "ACCOUNT_ERROR", "UNDERRIGHTING", "INITIAL", "INITIAL_READONLY", "ERROR"]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "channels",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]]
          }, {
            "type": "date-time",
            "className": "java.util.Date",
            "name": "resolvedDate",
            "value": ["java.util.Date", 0]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "actions",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "accounts",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "parties",
            "value": ["java.util.List", [null]]
          }, {
            "type": "date-time",
            "className": "java.util.GregorianCalendar",
            "name": "createDate",
            "value": ["java.util.GregorianCalendar", 0]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "frodResult",
            "value": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "events",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]]
          }, {
            "type": "date-time",
            "className": "java.util.Date",
            "name": "serviceStartDate",
            "value": ["java.util.Date", 0]
          }, {
            "type": "decimal",
            "className": "java.math.BigDecimal",
            "name": "rate",
            "value": ["java.math.BigDecimal", 0.0]
          }, {
            "type": "boolean",
            "className": "java.lang.Boolean",
            "name": "complete",
            "value": false
          }, {
            "type": "object",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo",
            "name": "masterSystemInfo",
            "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }]
          }, {
            "type": "string",
            "className": "java.lang.String",
            "name": "requestId",
            "value": "abc"
          }, {
            "type": "date-time",
            "className": "java.util.Date",
            "name": "createdDate",
            "value": ["java.util.Date", 0]
          }, {
            "type": "object",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct",
            "name": "product",
            "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }]
          }, {"type": "integer", "className": "java.lang.Integer", "name": "status", "value": 0}, {
            "type": "date-time",
            "className": "java.util.GregorianCalendar",
            "name": "resolveDate",
            "value": ["java.util.GregorianCalendar", 0]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "files",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]]
          }, {"type": "integer", "className": "java.lang.Integer", "name": "term", "value": 0}, {
            "type": "object",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.Department",
            "name": "department",
            "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "statusHistory",
            "value": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "assets",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]]
          }, {
            "type": "string",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.RequestType",
            "name": "requestType",
            "values": ["SHORT", "COMPLETE", "MIXED", "INITIAL"]
          }, {
            "type": "decimal",
            "className": "java.math.BigDecimal",
            "name": "amount",
            "value": ["java.math.BigDecimal", 0.0]
          }, {
            "type": "string",
            "className": "java.lang.String",
            "name": "requestClassName",
            "value": "abc"
          }, {
            "type": "date-time",
            "className": "java.util.GregorianCalendar",
            "name": "updateDate",
            "value": ["java.util.GregorianCalendar", 0]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "requests",
            "value": ["java.util.List", [null]]
          }, {
            "type": "string",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.ProcessingType",
            "name": "processingType",
            "values": ["NEW", "REPEAT", "CORRECTION"]
          }]
        }
      }, "exceptions": ["ru.sbrf.ufs.platform.core.exception.PlatformException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor", {
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }], "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }]
      }
    }]
  }, {
    "name": "getById",
    "response": {
      "success": {
        "example": [["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }]],
        "description": {
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "properties": [{
            "type": "array",
            "className": "java.util.List",
            "name": "agreements",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]]
          }, {
            "type": "string",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.ProcessingSystem",
            "name": "processingSystem",
            "values": ["UFS", "TSM", "CRM"]
          }, {
            "type": "object",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo",
            "name": "sourceSystemInfo",
            "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }]
          }, {
            "type": "string",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.PersonCategory",
            "name": "requestCategory",
            "values": ["EMPLOYEE", "SALARY", "STREET", "PENSION", "UNCONFIRM", "UNKNOWN"]
          }, {
            "type": "object",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo",
            "name": "issueInfo",
            "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }]
          }, {
            "type": "integer",
            "className": "java.lang.Integer",
            "name": "guarantorChangeCounter",
            "value": 0
          }, {
            "type": "object",
            "className": "ru.sbrf.uam.services.status.RequestChannelState",
            "name": "state",
            "value": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }]
          }, {
            "type": "string",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.RequestStatus",
            "name": "requestStatus",
            "values": ["REFUSED", "MORATORY", "REFUSED_CLIENT", "APPROVED", "DISPATCHED", "DISPATCHED_CP", "EXECUTED", "PREADOPTED", "ACCEPTED_WAIT_DELIVERY", "VISIT_REQUIRED", "NEED_UPDATE", "REFUSED_NOTIFICATION", "APPROVAL_NOTIFICATION", "APPROVAL_NOTIFICATION_CHANGE_US", "REFUSED_NOTIFICATION_CHANGE_US", "ACCOUNT_ERROR", "UNDERRIGHTING", "INITIAL", "INITIAL_READONLY", "ERROR"]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "channels",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]]
          }, {
            "type": "date-time",
            "className": "java.util.Date",
            "name": "resolvedDate",
            "value": ["java.util.Date", 0]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "actions",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "accounts",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "parties",
            "value": ["java.util.List", [null]]
          }, {
            "type": "date-time",
            "className": "java.util.GregorianCalendar",
            "name": "createDate",
            "value": ["java.util.GregorianCalendar", 0]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "frodResult",
            "value": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "events",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]]
          }, {
            "type": "date-time",
            "className": "java.util.Date",
            "name": "serviceStartDate",
            "value": ["java.util.Date", 0]
          }, {
            "type": "decimal",
            "className": "java.math.BigDecimal",
            "name": "rate",
            "value": ["java.math.BigDecimal", 0.0]
          }, {
            "type": "boolean",
            "className": "java.lang.Boolean",
            "name": "complete",
            "value": false
          }, {
            "type": "object",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo",
            "name": "masterSystemInfo",
            "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }]
          }, {
            "type": "string",
            "className": "java.lang.String",
            "name": "requestId",
            "value": "abc"
          }, {
            "type": "date-time",
            "className": "java.util.Date",
            "name": "createdDate",
            "value": ["java.util.Date", 0]
          }, {
            "type": "object",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct",
            "name": "product",
            "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }]
          }, {"type": "integer", "className": "java.lang.Integer", "name": "status", "value": 0}, {
            "type": "date-time",
            "className": "java.util.GregorianCalendar",
            "name": "resolveDate",
            "value": ["java.util.GregorianCalendar", 0]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "files",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]]
          }, {"type": "integer", "className": "java.lang.Integer", "name": "term", "value": 0}, {
            "type": "object",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.Department",
            "name": "department",
            "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "statusHistory",
            "value": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "assets",
            "value": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]]
          }, {
            "type": "string",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.RequestType",
            "name": "requestType",
            "values": ["SHORT", "COMPLETE", "MIXED", "INITIAL"]
          }, {
            "type": "decimal",
            "className": "java.math.BigDecimal",
            "name": "amount",
            "value": ["java.math.BigDecimal", 0.0]
          }, {
            "type": "string",
            "className": "java.lang.String",
            "name": "requestClassName",
            "value": "abc"
          }, {
            "type": "date-time",
            "className": "java.util.GregorianCalendar",
            "name": "updateDate",
            "value": ["java.util.GregorianCalendar", 0]
          }, {
            "type": "array",
            "className": "java.util.List",
            "name": "requests",
            "value": ["java.util.List", [null]]
          }, {
            "type": "string",
            "className": "ru.sbrf.bh.banking.product.pcredit.request.enumerations.ProcessingType",
            "name": "processingType",
            "values": ["NEW", "REPEAT", "CORRECTION"]
          }]
        }
      }, "exceptions": ["ru.sbrf.ufs.platform.core.exception.PlatformException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.SearchByIdAcceptor", {
        "requestId": "abc",
        "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.SearchByIdAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }, {"type": "string", "className": "java.lang.String", "name": "requestId", "value": "abc"}]
      }
    }]
  }, {
    "name": "search",
    "response": {
      "success": {
        "example": [["java.util.List", {}]],
        "description": {"className": "java.util.List", "properties": []}
      }, "exceptions": ["ru.sbrf.ufs.platform.core.exception.PlatformException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.HistorySearchAcceptor", {
        "createdDateMax": ["java.util.GregorianCalendar", 0],
        "createdDateMin": ["java.util.GregorianCalendar", 0],
        "departure": "abc",
        "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}],
        "channels": ["java.util.Set", ["PARTNERS"]],
        "lastUpdateDateMax": ["java.util.GregorianCalendar", 0],
        "lastUpdateDateMin": ["java.util.GregorianCalendar", 0],
        "mdmId": "abc",
        "statuses": ["java.util.Set", ["REFUSED"]],
        "orderAttribute": "MDM_ID",
        "product": "abc",
        "eribId": "abc",
        "orderDirection": "ASC",
        "epkId": "abc",
        "blockId": "abc",
        "resolvedDateMin": ["java.util.GregorianCalendar", 0],
        "resolvedDateMax": ["java.util.GregorianCalendar", 0],
        "requestCount": 0,
        "user": "abc"
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.HistorySearchAcceptor",
        "properties": [{
          "type": "string",
          "className": "java.lang.String",
          "name": "epkId",
          "value": "abc"
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "resolvedDateMin",
          "value": ["java.util.GregorianCalendar", 0]
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "lastUpdateDateMax",
          "value": ["java.util.GregorianCalendar", 0]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }, {"type": "string", "className": "java.lang.String", "name": "blockId", "value": "abc"}, {
          "type": "string",
          "className": "java.lang.String",
          "name": "product",
          "value": "abc"
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "resolvedDateMax",
          "value": ["java.util.GregorianCalendar", 0]
        }, {
          "type": "array",
          "className": "java.util.Set",
          "name": "channels",
          "value": ["java.util.Set", ["PARTNERS"]]
        }, {
          "type": "string",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.HistorySearchAcceptor$OrderAttribute",
          "name": "orderAttribute",
          "values": ["MDM_ID", "ERIB_ID", "EPK_ID", "RESOLVED_DATE", "CREATED_DATE", "UPDATE_DATE"]
        }, {
          "type": "array",
          "className": "java.util.Set",
          "name": "statuses",
          "value": ["java.util.Set", ["REFUSED"]]
        }, {"type": "integer", "className": "java.lang.Integer", "name": "requestCount", "value": 0}, {
          "type": "string",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.HistorySearchAcceptor$OrderDirection",
          "name": "orderDirection",
          "values": ["ASC", "DESC"]
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "createdDateMin",
          "value": ["java.util.GregorianCalendar", 0]
        }, {"type": "string", "className": "java.lang.String", "name": "departure", "value": "abc"}, {
          "type": "string",
          "className": "java.lang.String",
          "name": "mdmId",
          "value": "abc"
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "createdDateMax",
          "value": ["java.util.GregorianCalendar", 0]
        }, {"type": "string", "className": "java.lang.String", "name": "eribId", "value": "abc"}, {
          "type": "string",
          "className": "java.lang.String",
          "name": "user",
          "value": "abc"
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "lastUpdateDateMin",
          "value": ["java.util.GregorianCalendar", 0]
        }]
      }
    }]
  }, {
    "name": "update",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.ufs.platform.core.exception.PlatformException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor", {
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }], "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }]
      }
    }]
  }, {
    "name": "validate",
    "response": {
      "success": {
        "example": [["java.util.Set", {}]],
        "description": {"className": "java.util.Set", "properties": []}
      }, "exceptions": []
    },
    "requestParameters": [{
      "example": [["[Ljava.lang.Class;", {}]],
      "description": {"className": "[Ljava.lang.Class;", "properties": []}
    }, {
      "example": [["java.lang.String", {"hash": null, "value": ["[C", [null]], "hash32": null}]],
      "description": {
        "className": "java.lang.String",
        "properties": [{"type": null, "className": "int", "name": "hash32", "value": null}, {
          "type": "array",
          "className": "[C",
          "name": "value",
          "value": ["[C", [null]]
        }, {"type": null, "className": "int", "name": "hash", "value": null}]
      }
    }, {"example": [["java.lang.Object", {}]], "description": {"className": "java.lang.Object", "properties": []}}]
  }, {
    "name": "validateCreate",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.bh.banking.product.pcredit.request.exceptions.PersonalCreditRequestValidationException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor", {
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }], "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }]
      }
    }]
  }, {
    "name": "validateGetById",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.bh.banking.product.pcredit.request.exceptions.PersonalCreditRequestValidationException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.SearchByIdAcceptor", {
        "requestId": "abc",
        "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.SearchByIdAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }, {"type": "string", "className": "java.lang.String", "name": "requestId", "value": "abc"}]
      }
    }]
  }, {
    "name": "validateSearch",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.bh.banking.product.pcredit.request.exceptions.PersonalCreditRequestValidationException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.HistorySearchAcceptor", {
        "createdDateMax": ["java.util.GregorianCalendar", 0],
        "createdDateMin": ["java.util.GregorianCalendar", 0],
        "departure": "abc",
        "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}],
        "channels": ["java.util.Set", ["PARTNERS"]],
        "lastUpdateDateMax": ["java.util.GregorianCalendar", 0],
        "lastUpdateDateMin": ["java.util.GregorianCalendar", 0],
        "mdmId": "abc",
        "statuses": ["java.util.Set", ["REFUSED"]],
        "orderAttribute": "MDM_ID",
        "product": "abc",
        "eribId": "abc",
        "orderDirection": "ASC",
        "epkId": "abc",
        "blockId": "abc",
        "resolvedDateMin": ["java.util.GregorianCalendar", 0],
        "resolvedDateMax": ["java.util.GregorianCalendar", 0],
        "requestCount": 0,
        "user": "abc"
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.HistorySearchAcceptor",
        "properties": [{
          "type": "string",
          "className": "java.lang.String",
          "name": "epkId",
          "value": "abc"
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "resolvedDateMin",
          "value": ["java.util.GregorianCalendar", 0]
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "lastUpdateDateMax",
          "value": ["java.util.GregorianCalendar", 0]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }, {"type": "string", "className": "java.lang.String", "name": "blockId", "value": "abc"}, {
          "type": "string",
          "className": "java.lang.String",
          "name": "product",
          "value": "abc"
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "resolvedDateMax",
          "value": ["java.util.GregorianCalendar", 0]
        }, {
          "type": "array",
          "className": "java.util.Set",
          "name": "channels",
          "value": ["java.util.Set", ["PARTNERS"]]
        }, {
          "type": "string",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.HistorySearchAcceptor$OrderAttribute",
          "name": "orderAttribute",
          "values": ["MDM_ID", "ERIB_ID", "EPK_ID", "RESOLVED_DATE", "CREATED_DATE", "UPDATE_DATE"]
        }, {
          "type": "array",
          "className": "java.util.Set",
          "name": "statuses",
          "value": ["java.util.Set", ["REFUSED"]]
        }, {"type": "integer", "className": "java.lang.Integer", "name": "requestCount", "value": 0}, {
          "type": "string",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.HistorySearchAcceptor$OrderDirection",
          "name": "orderDirection",
          "values": ["ASC", "DESC"]
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "createdDateMin",
          "value": ["java.util.GregorianCalendar", 0]
        }, {"type": "string", "className": "java.lang.String", "name": "departure", "value": "abc"}, {
          "type": "string",
          "className": "java.lang.String",
          "name": "mdmId",
          "value": "abc"
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "createdDateMax",
          "value": ["java.util.GregorianCalendar", 0]
        }, {"type": "string", "className": "java.lang.String", "name": "eribId", "value": "abc"}, {
          "type": "string",
          "className": "java.lang.String",
          "name": "user",
          "value": "abc"
        }, {
          "type": "date-time",
          "className": "java.util.GregorianCalendar",
          "name": "lastUpdateDateMin",
          "value": ["java.util.GregorianCalendar", 0]
        }]
      }
    }]
  }, {
    "name": "validateUpdate",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.bh.banking.product.pcredit.request.exceptions.PersonalCreditRequestValidationException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor", {
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }], "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }]
      }
    }]
  }]
}, {
  "name": "ru.sbrf.bh.banking.product.pcredit.request.fg.SbrfPersonalCreditRequestTelemarketingFgService#0",
  "methods": [{
    "name": "sendToTelemarketing",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.ufs.platform.core.exception.PlatformException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.SendToTelemarketingAcceptor", {
        "source": "abc",
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }],
        "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}],
        "prodSubType": "abc",
        "type": "abc"
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.SendToTelemarketingAcceptor",
        "properties": [{
          "type": "string",
          "className": "java.lang.String",
          "name": "source",
          "value": "abc"
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {"type": "string", "className": "java.lang.String", "name": "type", "value": "abc"}, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }, {"type": "string", "className": "java.lang.String", "name": "prodSubType", "value": "abc"}]
      }
    }]
  }]
}]
