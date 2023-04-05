
const platformFeeRate = 0.01
const insuranceFeeRate = 0.01
const securityDepositRate = 0.1

export const calQuickerIncome = (orderPrice: number): string => {
    if (orderPrice === 0) {
        return "0"
    }
    const platformFee = orderPrice * platformFeeRate
    const insuranceFee = orderPrice * insuranceFeeRate 
    let result = orderPrice - platformFee - insuranceFee
    return Math.floor(result).toLocaleString()
}
export const calSecurityDeposit = (orderPrice: number): string => {
    if (orderPrice === 0) {
        return "0"
    }
    let result = orderPrice * securityDepositRate
    return Math.floor(result).toLocaleString()
}

export const extractNumber = (priceChar: string) => {
    const numStr = priceChar.replace(/[^\d]/g, ''); 
    return parseInt(numStr, 10);
  }