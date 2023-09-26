
export const Bank=({currentBank, handleEvent, audioRef})=> {
  return (
    
<div className="col drum-pad">
                      {currentBank.map((bank) => {
                        return (
                          <button
                            key={bank.id}
                            className=" btn btn-light btn-lg button btn-big"
                            id={bank.id}
                            // onKeyPress={handleEvent}
                            onClick={handleEvent}
                          >
                            <audio
                              className="clip"
                              id={bank.keyTrigger}
                              src={bank.url}
                              ref={audioRef}
                            />
                            {bank.keyTrigger}
                          </button>
                        );
                      })}
                    </div>
  );
}
