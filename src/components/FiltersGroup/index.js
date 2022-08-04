import {BsSearch} from 'react-icons/bs'
import ProfileData from '../ProfileData'
import './index.css'

const FiltersGroup = props => {
  const changeSearchInput = event => {
    const {onChangeSearchInput} = props
    onChangeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    const {getJobs, searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={changeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          type="button"
          testid="searchButton"
          className="search-button-container"
          onClick={getJobs}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const renderEmploymentType = () => {
    const {employmentTypesList} = props
    return (
      <div className="employment-type-container">
        <h1 className="employment-type-heading"> Type of Employment</h1>
        <ul className="employee-type-list-container">
          {employmentTypesList.map(eachEmployeeType => {
            const {onChangeEmployeeList} = props
            const onSelectEmployeeType = event => {
              onChangeEmployeeList(event.target.value)
            }
            return (
              <li
                className="employee-item"
                key={eachEmployeeType.employmentTypeId}
                onChange={onSelectEmployeeType}
              >
                <input
                  type="checkbox"
                  id={eachEmployeeType.employmentTypeId}
                  className="check-input"
                  value={eachEmployeeType.employmentTypeId}
                />
                <label
                  htmlFor={eachEmployeeType.employmentTypeId}
                  className="check-label"
                >
                  {eachEmployeeType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div className="salary-container">
        <h1 className="salary-heading">Salary Range</h1>
        <ul className="salary-list">
          {salaryRangesList.map(eachSalary => {
            const {onChangeSalary} = props
            const onClickSalary = () => {
              onChangeSalary(eachSalary.salaryRangeId)
            }
            return (
              <li
                className="salary-item"
                key={eachSalary.salaryRangeId}
                onClick={onClickSalary}
              >
                <input
                  type="radio"
                  id={eachSalary.salaryRangeId}
                  name="salary"
                  className="radio-input"
                />
                <label
                  htmlFor={eachSalary.salaryRangeId}
                  className="radio-label"
                >
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-container">
      {renderSearchInput()}
      <ProfileData />
      <hr className="hr-line" />
      {renderEmploymentType()}
      <hr className="hr-line" />
      {renderSalaryRange()}
    </div>
  )
}
export default FiltersGroup
