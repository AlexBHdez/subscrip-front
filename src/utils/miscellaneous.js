export const capitalize = string => string ? string.charAt(0).toUpperCase() + string.slice(1) : ''

export const getWelcomeMessage = () => {
  const date = new Date()
  const hours = date.getHours() % 12

  if (hours < 12) {
    return 'Good Morning'
  } else if ((hours >= 12) && (hours <= 17)) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
}
