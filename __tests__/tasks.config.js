const SPRINT_TO_TASKS = {
  1: ['P-01', 'P-02', 'P-03', 'P-04'],
  2: ['P-05', 'P-06'],
  3: ['P-07', 'P-08', 'P-09', 'P-10', 'P-11', 'P-12'],
  4: ['P-13', 'P-14', 'P-15'],
  5: ['P-16', 'P-17', 'P-18'],
  6: ['P-19', 'P-20', 'P-21', 'P-22'],
}

function getTestPathsForBranch(branchName) {
  const singleMatch = branchName.match(
    /(?:feat|fix)\/P-(\d{2})[\w-]*|^P-(\d{2})[\w-]*/i
  )
  if (singleMatch) {
    const num = singleMatch[1] || singleMatch[2]
    const task = `P-${num}`
    return [`__tests__/${task}`]
  }

  const sprintMatch = branchName.match(/sprint[\/\s](\d)/i)
  if (sprintMatch) {
    const sprintNum = parseInt(sprintMatch[1], 10)
    const tasks = SPRINT_TO_TASKS[sprintNum]
    if (tasks) {
      return tasks.map((t) => `__tests__/${t}`)
    }
  }


  return []
}

module.exports = { getTestPathsForBranch, SPRINT_TO_TASKS }
