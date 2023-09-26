
export const Tools=({checkedPower, setPower, display, volume, handleChangeVolume, checkedBank, setBank})=> {
  return (

<div className="col">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input power"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          checked={checkedPower}
                          onChange={setPower}
                        />
                        <label
                          className="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                          Power
                        </label>
                      </div>
                      <div className="mt-4 mb-4">
                        <p className="text-center display" id="display">
                          {display}
                        </p>
                      </div>
                      <div>
                        <input
                          type="range"
                          className="form-range"
                          id="customRange1"
                          min="1"
                          max="100"
                          default="50"
                          step="5"
                          value={volume}
                          onChange={handleChangeVolume}
                        />
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input bank"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                          checked={checkedBank}
                          onChange={setBank}
                        />
                        <label
                          className="form-check-label"
                          for="flexSwitchCheckDefault"
                        >
                          Bank
                        </label>
                      </div>
                    </div>
  )
}