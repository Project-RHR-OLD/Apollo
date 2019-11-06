import React, { Component } from 'react'

class MealPlanner extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="container">
       <br/>
       <br/>
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Meal Planner</h1>
          </div>

          <br/>
          <div class="container">
        
                <div class="row" id="mealplannerform">
                    <div class="col-md-1">
                    </div>
        
                    <div class="col-md-10">
                        <div class="card">
                        <div class="card-header">
                            <h3>Automatic Meal Planner</h3>
                        </div>
                        <div class="card-body">
        
                        
        
                            <form method="post">
                                <input type="hidden" name="csrfmiddlewaretoken" value="ACtQCSyHA7ixBtGAdKTQmzKZZ5zmWGs2NaTytJebOWa0nvf4GiZ2Xpy7vJE8SW1k"></input>
                                <p><label for="id_diet">Diet:</label> <select name="diet" id="id_diet">
                                <option value="Any">Any</option>
                                
                                <option value="Vegan">Vegan</option>
                                
                                <option value="Vegetarian">Vegetarian</option>
                                
                                <option value="Paleo">Paleo</option>
                                
                                <option value="Ketogenic">Ketogenic</option>
                                
                                </select></p>
                                <p><label for="id_calories">Calories:</label> <input type="number" name="calories" required="" id="id_calories"></input></p>
                                
                                <button type="submit" class="btn btn-primary">Generate Meal Plan</button>
                       
                            </form>
        
                        </div>
                        </div>
                    </div>
        
                    <div class="col-md-1"> 
                    </div>

                </div>
                </div>

       
      </div>
    )
  }
}

export default MealPlanner
