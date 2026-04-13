const recipes = [
  {
    id: "masala-chai-cake",
    name: "Masala Chai Cake",
    description: "A spiced tea-flavored cake with chai frosting that transforms your favorite hot beverage into a delicious layered dessert.",
    category: "Cakes",
    prepTime: "45 min",
    cookTime: "30 min",
    totalTime: "75 min",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": [
        "400g all-purpose flour",
        "58g corn flour",
        "2 tsp baking powder",
        "1/4 tsp baking soda",
        "400g granulated white sugar",
        "1/2 tsp cinnamon powder",
        "345g unsalted butter, softened",
        "1/2 tsp cardamom powder",
        "3 whole eggs",
        "2 egg whites",
        "2 tsp vanilla essence",
        "360ml buttermilk",
        "200ml full-fat milk",
        "10g loose tea leaves",
        "25g sugar",
        "Whole spices (cardamom, clove, cinnamon, ginger)"
      ],
      "Frosting": [
        "120ml liquid whipping cream",
        "130ml full-fat milk",
        "150ml water",
        "7g loose tea leaves",
        "10g sugar"
      ]
    },
    instructions: [
      "Preheat oven to 170°C and prepare pans with butter and flour.",
      "Combine dry ingredients: flour, corn flour, baking powder, soda, salt, and spices.",
      "Cream softened butter and sugar until thick and pale, about 5-7 minutes.",
      "Add eggs, egg whites, and vanilla; whisk for 2-3 minutes.",
      "Gradually fold in dry ingredients on low speed.",
      "Add buttermilk and mix until smooth.",
      "Bake 20-30 minutes until a toothpick comes out clean; cool completely.",
      "For frosting: simmer milk, tea leaves, sugar, and whole spices for 10-15 minutes; strain and cool.",
      "Whip cream to soft peaks, then add cooled chai mixture; whip to stiff peaks.",
      "For topping syrup: simmer milk, water, tea leaves, and sugar 10-15 minutes; strain and cool.",
      "Poke holes in cooled cake layers with a fork, pour chai syrup until absorbed.",
      "Pipe chai cream on top and sprinkle with cinnamon powder."
    ],
    tips: ["Use strong loose tea leaves for best flavor.", "Allow the chai to cool completely before adding to cream."]
  },
  {
    id: "chocolate-chip-cookies",
    name: "Bakery Style Chunky Chocolate Chip Cookies",
    description: "The perfect bakery-style chunky chocolate chip cookies with a dash of sea salt for that irresistible sweet-salty combination.",
    category: "Cookies",
    prepTime: "30 min",
    cookTime: "15 min",
    totalTime: "12-48 hrs (includes chilling)",
    servings: 12,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
    ingredients: {
      "Cookie Dough": [
        "380g all-purpose flour",
        "1 tsp baking soda",
        "1 tsp baking powder",
        "1/2 tsp salt",
        "227g unsalted butter, room temperature",
        "50g white granulated sugar",
        "247g packed brown sugar",
        "2 eggs, room temperature",
        "1 tsp vanilla essence",
        "340g chocolate chips",
        "1 tsp sea salt for topping"
      ]
    },
    instructions: [
      "Mix dry ingredients: flour, baking soda, baking powder, and salt; set aside.",
      "Cream butter with both sugars on high speed for 2 minutes until light and fluffy.",
      "Add room-temperature eggs and vanilla; whisk until fully incorporated.",
      "Fold dry ingredients into wet mixture on low speed until combined.",
      "Add chocolate chips; mix briefly.",
      "Divide dough in half, wrap in cling film, and refrigerate 12-48 hours.",
      "Preheat oven to 180°C; line baking pan with parchment paper.",
      "Scoop dough balls onto prepared pan with adequate spacing.",
      "Bake 12-14 minutes until edges brown but center remains soft.",
      "Sprinkle sea salt on cooled cookies."
    ],
    tips: ["Chilling dough 12-48 hours creates chewier, thicker cookies.", "Remove dough from fridge 30 minutes before baking.", "Don't overmix butter and sugar mixture."]
  },
  {
    id: "kunafa-cheesecake",
    name: "Kunafa Cheesecake",
    description: "A Middle-Eastern twist on the classic baked New York cheesecake featuring all the beloved flavors of kunafa with a crispy kataifi base.",
    category: "Cheesecakes",
    prepTime: "60 min",
    cookTime: "90 min",
    totalTime: "8.5 hrs",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?w=600&h=400&fit=crop",
    ingredients: {
      "Cheesecake Layer": [
        "810g cream cheese",
        "220g granulated sugar",
        "115g sour cream",
        "1 tsp lemon juice",
        "1 tsp vanilla extract",
        "4 eggs"
      ],
      "Sugar Syrup": [
        "200g granulated white sugar",
        "200ml water"
      ],
      "Kataifi Base": [
        "200g kataifi dough, defrosted",
        "85g unsalted butter, melted"
      ],
      "Topping": [
        "200g keshta cream"
      ]
    },
    instructions: [
      "Preheat oven to 160°C. Grease springform pan with butter and line with parchment paper.",
      "Beat cream cheese on medium speed until soft and smooth.",
      "Add sugar and beat 2-3 minutes until well combined with no graininess.",
      "Add sour cream, lemon juice, and vanilla extract; mix thoroughly.",
      "Add beaten eggs and mix until smooth with no lumps.",
      "Transfer batter to prepared pan and wrap sides with aluminum foil.",
      "Bake in water bath for 50-60 minutes until sides are firm and center is set but soft.",
      "Cool, then freeze 3-6 hours until completely set.",
      "For syrup: combine sugar and water, bring to boil, simmer on low 10 minutes until thick. Cool before using.",
      "For kataifi base: mix defrosted dough with melted butter. Reserve some for topping and roast until golden.",
      "Press remaining dough into springform pan. Bake 15-20 minutes until golden-brown.",
      "Pour generous sugar syrup over hot base; chill 1-2 hours.",
      "Assemble: place kataifi base, add frozen cheesecake layer, refrigerate 3-6 hours.",
      "Top with keshta cream, roasted kataifi, and drizzle syrup before serving."
    ],
    tips: ["Serve with extra sugar syrup on the side.", "The water bath prevents the cheesecake from cracking."]
  },
  {
    id: "molten-lava-cake",
    name: "Chocolate Molten Lava Cake",
    description: "A rich, decadent chocolate cake with a perfectly gooey molten center that flows when you break into it.",
    category: "Cakes",
    prepTime: "15 min",
    cookTime: "15 min",
    totalTime: "30 min",
    servings: 2,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop",
    ingredients: {
      "Lava Cake": [
        "85g chocolate",
        "58g unsalted butter",
        "15g all-purpose flour",
        "30g icing sugar",
        "Pinch of salt",
        "1 egg",
        "1 egg yolk"
      ]
    },
    instructions: [
      "Preheat oven to 210-215°C.",
      "Grease ramekins with butter and dust with cocoa powder to prevent sticking.",
      "Melt chocolate and butter together in 20-second microwave increments, stirring between each; let cool.",
      "Whisk melted mixture until butter is well incorporated.",
      "Combine flour, icing sugar, and salt in a separate bowl.",
      "Whisk egg and egg yolk together in another bowl.",
      "Gently fold dry ingredients and egg mixture into cooled chocolate mixture; avoid overmixing.",
      "Fill prepared ramekins three-quarters full.",
      "Bake 10-12 minutes until sides set but center jiggles slightly.",
      "Invert onto plates and serve immediately with ice cream."
    ],
    tips: ["The key is timing - sides should be set but center should jiggle.", "Serve immediately for the best molten effect."]
  },
  {
    id: "homemade-churros",
    name: "Homemade Churros",
    description: "Crispy on the outside, soft on the inside - these homemade churros coated in cinnamon sugar are the perfect treat.",
    category: "Pastries",
    prepTime: "30 min",
    cookTime: "15 min",
    totalTime: "45 min",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1624371414361-e670246ae8ec?w=600&h=400&fit=crop",
    ingredients: {
      "Churros": [
        "120g butter",
        "90ml water",
        "12ml full-fat milk",
        "20g caster sugar",
        "1/4 tsp salt",
        "85g all-purpose flour",
        "2 eggs",
        "Neutral oil for frying",
        "Cinnamon sugar for coating"
      ]
    },
    instructions: [
      "Heat butter, water, milk, sugar, and salt in a saucepan until boiling over medium heat.",
      "Stir flour into the boiling mixture, continuing for 5-8 minutes until dough releases from pan sides.",
      "Transfer dough to stand mixer. Mix on high speed 3-5 minutes until steam stops rising.",
      "Add eggs one at a time on medium speed, mixing until fully incorporated.",
      "Transfer dough to piping bag with a star tip. Pipe straight lines onto parchment-lined tray.",
      "Freeze 15-20 minutes until set.",
      "Heat oil in deep pan. Fry churros on medium heat until golden brown.",
      "Coat hot churros in cinnamon sugar and serve immediately with dipping sauce."
    ],
    tips: ["Freezing before frying helps them keep their shape.", "Keep oil at a moderate temperature for even cooking."]
  },
  {
    id: "baklava-cake",
    name: "Baklava Cake",
    description: "A fusion dessert that combines the flavors of traditional baklava with a moist, spiced cake topped with crispy filo pastry layers.",
    category: "Cakes",
    prepTime: "45 min",
    cookTime: "45 min",
    totalTime: "2.5 hrs",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": [
        "250g all-purpose flour",
        "65g granulated white sugar",
        "65g brown sugar",
        "10g baking powder",
        "1 tsp cinnamon powder",
        "15g chopped pistachios",
        "15g chopped walnuts",
        "1/4 tsp salt",
        "250ml full-fat milk",
        "1 large egg",
        "1 tsp vanilla essence",
        "75g butter, melted"
      ],
      "Baklava Topping": [
        "3 filo pastry sheets, defrosted",
        "200g butter, melted",
        "50g pistachios",
        "50g walnuts",
        "1 tsp cinnamon powder",
        "500ml water",
        "350g granulated white sugar"
      ]
    },
    instructions: [
      "Preheat oven to 160°C. Grease and flour a 7-inch springform pan.",
      "Combine dry ingredients and nuts; whisk together.",
      "Add milk, egg, and vanilla; whisk until combined.",
      "Drizzle melted butter while whisking until incorporated.",
      "Transfer batter to pan; chill 10 minutes.",
      "Cut filo sheets into circles matching pan size.",
      "Blend pistachios, walnuts, and cinnamon until roughly chopped.",
      "Layer filo with butter and nut filling alternately; finish with buttered filo.",
      "Bake 40-45 minutes until cooked; broil until golden.",
      "Make syrup: boil water and sugar, simmer 10 minutes until thickened.",
      "Pour 3-4 tablespoons syrup over hot cake; cool completely."
    ],
    tips: ["Broil the top for 3-5 minutes before serving to crisp the filo.", "Serve with extra syrup on the side."]
  },
  {
    id: "homemade-cinnamon-rolls",
    name: "Fluffy Homemade Cinnamon Rolls",
    description: "Soft, fluffy cinnamon rolls filled with brown sugar and cinnamon, topped with a luscious cream cheese glaze.",
    category: "Pastries",
    prepTime: "60 min",
    cookTime: "20 min",
    totalTime: "4 hrs 20 min",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1609126979532-3f0d76935d38?w=600&h=400&fit=crop",
    ingredients: {
      "Dough": [
        "92g granulated white sugar",
        "78g unsalted butter, softened",
        "7g salt",
        "1 large egg",
        "454g all-purpose flour",
        "6g instant yeast",
        "255g full-fat milk, lukewarm"
      ],
      "Filling": [
        "100g packed brown sugar",
        "20g cinnamon powder",
        "30g unsalted butter, softened"
      ],
      "Cream Cheese Glaze": [
        "120g cream cheese",
        "55g unsalted butter, softened",
        "120g powdered sugar",
        "2 tsp vanilla essence"
      ]
    },
    instructions: [
      "Cream butter, sugar, and salt for 3-5 minutes; add egg and mix 1-2 minutes.",
      "Add flour, lukewarm milk, and yeast; mix until dough comes together.",
      "Knead until smooth and soft, approximately 20 minutes by hand.",
      "Perform windowpane test to confirm proper gluten development.",
      "Oil bowl, place dough inside, cover and let rise 1.5-2 hours until doubled.",
      "Punch down, roll into a 14x18 inch rectangle.",
      "Spread butter, sprinkle cinnamon-sugar mixture evenly.",
      "Roll tightly horizontally; slice with dental floss into 12 pieces.",
      "Place in baking pan with spacing; cover and proof 1.5-2 hours.",
      "Bake at 160-170°C for 15-20 minutes until light blonde.",
      "Prepare glaze by whipping cream cheese and butter, then add powdered sugar and vanilla.",
      "Apply glaze 10 minutes after removing from oven; cool 10 minutes before serving."
    ],
    tips: ["Use dental floss to cut clean slices.", "The dough should pass the windowpane test for best texture."]
  },
  {
    id: "red-velvet-molten-lava-cake",
    name: "Red Velvet Molten Lava Cake",
    description: "A stunning red velvet version of the classic molten lava cake with a cream cheese glaze drizzle.",
    category: "Cakes",
    prepTime: "15 min",
    cookTime: "15 min",
    totalTime: "30 min",
    servings: 2,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&h=400&fit=crop",
    ingredients: {
      "Lava Cake": [
        "85g chocolate chips",
        "58g unsalted butter",
        "12g icing sugar",
        "Pinch of salt",
        "1 egg",
        "1 egg yolk"
      ],
      "Cream Cheese Glaze": [
        "30g cream cheese",
        "10g icing sugar",
        "20ml milk"
      ]
    },
    instructions: [
      "Preheat oven to 200°C. Grease and dust ramekins with butter and flour.",
      "Melt chocolate and butter together using a double boiler or microwave in 20-second increments.",
      "Whisk the chocolate mixture until butter is fully incorporated.",
      "Combine flour, icing sugar, and salt separately. Whisk egg and egg yolk in another bowl.",
      "Add dry ingredients and egg mixture to cooled chocolate mixture; whisk until combined.",
      "Pour batter into prepared ramekins halfway full.",
      "Bake 12-13 minutes until sides are set but center remains jiggly.",
      "Make glaze by whisking cream cheese, icing sugar, and milk together.",
      "Invert cakes onto plates and drizzle with cream cheese glaze. Serve immediately."
    ],
    tips: ["Watch the timing carefully - even 1 minute too long will set the center.", "The cream cheese glaze adds the signature red velvet flavor profile."]
  },
  {
    id: "masala-chai-tiramisu",
    name: "Masala Chai Tiramisu",
    description: "A desi-inspired tiramisu that swaps espresso for fragrant masala chai, layered with spiced mascarpone cream and pistachios.",
    category: "Desserts",
    prepTime: "30 min",
    cookTime: "0 min",
    totalTime: "4.5 hrs",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop",
    ingredients: {
      "Chai": [
        "260ml full-fat milk",
        "260ml water",
        "14g loose black tea",
        "14g sugar",
        "Whole spices (cinnamon, cardamom)",
        "200g ladyfingers"
      ],
      "Mascarpone Cream": [
        "2 eggs, separated",
        "100g white granulated sugar, divided",
        "250g mascarpone cheese",
        "1 tsp vanilla essence",
        "1/2 tsp salt",
        "1/4 tsp cinnamon powder",
        "1/4 tsp cardamom powder",
        "100ml whipped cream",
        "Chopped pistachios for topping"
      ]
    },
    instructions: [
      "Prepare chai by combining milk, water, tea, sugar, and spices. Simmer 5-10 minutes. Cool completely.",
      "Dip ladyfinger biscuits in cooled chai for 5-6 seconds; arrange as bottom layer in serving dish.",
      "Whip egg yolks with half the sugar until pale and glossy, 5-8 minutes.",
      "Fold in mascarpone, vanilla, salt, and spices until combined.",
      "Whip egg whites with remaining sugar to stiff peaks in separate bowl.",
      "Gently fold egg whites into mascarpone mixture in three increments.",
      "Layer: chai-soaked ladyfingers, half mascarpone cream, ladyfingers, remaining cream, whipped cream, pistachios.",
      "Refrigerate 4-5 hours or overnight before serving."
    ],
    tips: ["The longer it chills, the better the flavors meld.", "Don't over-soak the ladyfingers or they'll become mushy."]
  },
  {
    id: "carrot-cake",
    name: "Carrot Cake with Brown Sugar Cream Cheese Frosting",
    description: "A perfectly spiced, moist carrot cake topped with a rich brown sugar cream cheese frosting.",
    category: "Cakes",
    prepTime: "40 min",
    cookTime: "30 min",
    totalTime: "70 min",
    servings: 8,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": [
        "160g all-purpose flour",
        "2 tsp baking powder",
        "1 tsp cinnamon powder",
        "1/2 tsp nutmeg powder",
        "1/2 tsp salt",
        "190ml vegetable oil",
        "80ml full-fat milk",
        "1 tsp vanilla extract",
        "3 eggs",
        "160g brown sugar",
        "90g grated carrots"
      ],
      "Frosting": [
        "75g unsalted butter, softened",
        "50g packed brown sugar",
        "150g cream cheese"
      ]
    },
    instructions: [
      "Preheat oven to 180°C. Grease baking pan with butter and flour.",
      "Grate carrots and squeeze out all water. Measure after squeezing.",
      "Combine dry ingredients: flour, baking powder, cinnamon, nutmeg, and salt.",
      "Whisk wet ingredients: oil, milk, and vanilla extract.",
      "Beat eggs with mixer for 3-5 minutes until pale and fluffy.",
      "Add brown sugar to eggs, beat 3-5 minutes until incorporated.",
      "Gradually pour wet mixture into egg mixture on low speed.",
      "Fold in dry ingredients in 3 parts using a spatula.",
      "Fold in grated carrots until no lumps remain.",
      "Bake 30-40 minutes until toothpick comes clean.",
      "For frosting: beat softened butter until pale, add brown sugar and beat 3-5 minutes, add cream cheese and mix.",
      "Top cooled cake layers with frosting."
    ],
    tips: ["Squeeze out all water from grated carrots for the best texture.", "Don't overmix the cream cheese frosting or it will become runny."]
  },
  {
    id: "baklava-mille-feuille",
    name: "Chocolate & Pistachio Baklava Mille-Feuille",
    description: "An impressive layered dessert combining flaky baklava with rich chocolate pastry cream and pistachios.",
    category: "Pastries",
    prepTime: "60 min",
    cookTime: "30 min",
    totalTime: "5 hrs",
    servings: 8,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop",
    ingredients: {
      "Pastry Cream": [
        "1 litre full-fat milk",
        "2 tsp vanilla essence",
        "200g egg yolks",
        "240g caster sugar",
        "100g cornstarch",
        "50g unsalted butter"
      ],
      "Baklava Layers": [
        "200g dark chocolate",
        "100g pistachios",
        "56 sheets filo pastry",
        "100g unsalted butter, melted"
      ],
      "Sugar Syrup": [
        "300g sugar",
        "200g water"
      ]
    },
    instructions: [
      "Heat milk with vanilla. Whisk egg yolks with sugar and cornstarch.",
      "Temper eggs by slowly adding hot milk while whisking.",
      "Cook combined mixture over heat until thickened. Add cold butter.",
      "Cool pastry cream in fridge 2-3 hours.",
      "Grind chocolate and pistachios together.",
      "Layer 7 filo sheets with melted butter, add nut filling, repeat.",
      "Bake 12-15 minutes until golden.",
      "Make syrup: boil sugar and water, simmer 10-15 minutes.",
      "Drizzle hot sugar syrup over baklava layers immediately.",
      "Pipe cooled pastry cream between baklava layers.",
      "Top with decorative cream and pistachios."
    ],
    tips: ["Work quickly with filo pastry to prevent it from drying out.", "The syrup should be hot when poured over the baklava."]
  },
  {
    id: "smores-brownie",
    name: "S'mores Brownie",
    description: "Fudgy brownies loaded with marshmallows, graham crackers, and extra chocolate chips for the ultimate campfire-inspired treat.",
    category: "Brownies",
    prepTime: "22 min",
    cookTime: "30 min",
    totalTime: "52 min",
    servings: 9,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=600&h=400&fit=crop",
    ingredients: {
      "Brownie": [
        "113g chocolate chips",
        "175g unsalted butter",
        "400g granulated sugar",
        "3 eggs",
        "1 tsp vanilla extract",
        "125g all-purpose flour",
        "85g cocoa powder",
        "1/2 tsp salt",
        "60g chocolate chips",
        "50g marshmallows, divided",
        "50g graham crackers or digestive biscuits, divided"
      ]
    },
    instructions: [
      "Preheat oven to 180°C.",
      "Line pan with baking paper, leaving overhang on sides.",
      "Melt chocolate with butter until combined.",
      "Add sugar to melted chocolate and whisk while hot.",
      "Incorporate eggs and vanilla extract.",
      "Fold in cocoa powder, flour, salt, chocolate chips, and half the marshmallows and biscuits.",
      "Transfer batter to prepared pan and spread evenly.",
      "Top with remaining marshmallows and biscuits.",
      "Bake 30-40 minutes until cooked but fudgy.",
      "Cool completely before slicing."
    ],
    tips: ["The brownies should still be slightly fudgy in the center.", "Let them cool completely for cleaner slices."]
  },
  {
    id: "kulfi-tart",
    name: "Pistachio Kulfi Tart",
    description: "A frozen fusion dessert combining a pistachio shortcrust tart shell with a creamy, cardamom-spiced kulfi filling.",
    category: "Tarts",
    prepTime: "30 min",
    cookTime: "45 min",
    totalTime: "7 hrs",
    servings: 4,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop",
    ingredients: {
      "Pistachio Tart Base": [
        "100g ground pistachios",
        "165g all-purpose flour",
        "40g icing sugar",
        "1/2 tsp salt",
        "113g cold unsalted butter",
        "20-30ml cold water"
      ],
      "Kulfi Filling": [
        "500ml full-fat milk",
        "60g sugar",
        "240ml full-fat milk",
        "12g cornstarch",
        "15g ground pistachios",
        "1/4 tsp cardamom powder",
        "Pinch of saffron",
        "White chocolate and pistachios for decoration"
      ]
    },
    instructions: [
      "Mix ground pistachios, flour, icing sugar, and salt. Cut in cold butter until breadcrumb texture.",
      "Gradually add water until dough holds together. Wrap and refrigerate 30+ minutes.",
      "Roll dough between parchment paper; shape in tart ring. Bake at 180°C for 15-25 minutes. Cool.",
      "Heat 500ml milk with sugar, simmer 10 minutes, stirring constantly.",
      "Mix cornstarch with remaining milk; add to simmering mixture.",
      "Add ground pistachios, saffron, cardamom, and cream. Cook until custard-like, 15-20 minutes.",
      "Cool filling, then pour into tart base. Freeze 4-6 hours until set.",
      "Top with white chocolate layer and pistachios. Serve chilled."
    ],
    tips: ["Keep butter ice cold for the flakiest pastry.", "The kulfi filling thickens as it cools."]
  },
  {
    id: "mango-ice-cream",
    name: "3-Ingredient No-Churn Mango Ice Cream",
    description: "A creamy, luscious mango ice cream made with just 3 ingredients and no ice cream machine needed.",
    category: "Ice Cream",
    prepTime: "30 min",
    cookTime: "0 min",
    totalTime: "8.5 hrs",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop",
    ingredients: {
      "Ice Cream": [
        "200ml liquid whipping cream / heavy cream",
        "160ml condensed milk",
        "120g fresh mango pulp (blended mango)",
        "50g mango chunks",
        "20g extra mango pulp for topping"
      ]
    },
    instructions: [
      "Whip the cream in a large bowl until nearly stiff peaks form; avoid overmixing.",
      "Add condensed milk and fresh mango pulp, then whip until fully combined and stable.",
      "Fold in mango chunks using a silicone spatula.",
      "Transfer to a bowl, top with remaining mango puree, and swirl with a spatula.",
      "Freeze for at least 8 hours or overnight.",
      "Serve plain or with desired toppings."
    ],
    tips: ["Use ripe, sweet mangoes for the best flavor.", "Don't over-whip the cream or it will become grainy."]
  },
  {
    id: "butterbeer",
    name: "Butterbeer",
    description: "A magical non-alcoholic butterscotch drink inspired by the wizarding world, topped with whipped cream.",
    category: "Drinks",
    prepTime: "10 min",
    cookTime: "5 min",
    totalTime: "15 min",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop",
    ingredients: {
      "Butterscotch Sauce": [
        "75g unsalted butter",
        "132g packed brown sugar",
        "95ml liquid whipping cream / heavy cream"
      ],
      "Butterbeer": [
        "80g butterscotch sauce",
        "250g vanilla ice cream",
        "330ml cream soda",
        "Sweetened whipped cream for topping"
      ]
    },
    instructions: [
      "Make butterscotch sauce: combine butter, brown sugar, and cream in a saucepan.",
      "Cook over medium-high heat while stirring until butter melts.",
      "Once boiling, reduce heat and simmer 2-3 minutes until thickened. Cool slightly.",
      "Blend ice cream, butterscotch sauce, and cream soda until well combined.",
      "Pour into a tall glass, top with whipped cream and additional butterscotch sauce."
    ],
    tips: ["Use cold cream soda for a frothier texture.", "The butterscotch sauce can be made ahead and refrigerated."]
  },
  {
    id: "creme-brulee-french-toast",
    name: "Creme Brulee French Toast",
    description: "Thick brioche slices stuffed with vanilla custard, pan-fried to golden perfection, and topped with a caramelized sugar crust.",
    category: "French Toast",
    prepTime: "30 min",
    cookTime: "15 min",
    totalTime: "1.5 hrs",
    servings: 2,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop",
    ingredients: {
      "Custard": [
        "30g egg yolks (about 2)",
        "36g caster sugar",
        "15g cornflour",
        "150ml full-fat milk",
        "1 tsp vanilla essence",
        "15g unsalted butter"
      ],
      "French Toast": [
        "2 eggs",
        "100ml full-fat milk",
        "50g granulated white sugar",
        "1 tsp vanilla essence",
        "1 tsp cinnamon",
        "1/4 tsp salt",
        "2 thick brioche slices",
        "2 tbsp ghee or butter",
        "30g granulated white sugar for brulee topping"
      ]
    },
    instructions: [
      "Heat milk and vanilla until boiling; whisk egg yolks, caster sugar, and cornflour until pale.",
      "Temper eggs by slowly adding half the hot milk while whisking continuously.",
      "Transfer back to saucepan; whisk until thickened, about 2 minutes. Add butter. Chill for at least 1 hour.",
      "Mix eggs, milk, sugar, vanilla, cinnamon, and salt for French toast batter.",
      "Cut a pocket into brioche slices from the bottom without cutting through edges.",
      "Fill pockets with cooled custard using a piping bag.",
      "Dip filled brioche in egg mixture for 30-40 seconds per side.",
      "Cook in buttered pan for 2-3 minutes per side until golden.",
      "Top with sugar and torch until caramelized. Serve with fresh berries."
    ],
    tips: ["The custard must be completely chilled before filling.", "Use a kitchen torch for the best caramelized crust."]
  },
  {
    id: "honey-butter-toast",
    name: "Honey Butter Toast with Condensed Milk",
    description: "Thick brioche toast slathered with honey butter and filled with sweet condensed milk - a Korean-inspired cafe treat.",
    category: "French Toast",
    prepTime: "20 min",
    cookTime: "10 min",
    totalTime: "30 min",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop",
    ingredients: {
      "Toast": [
        "40g unsalted butter, room temperature",
        "40g brown sugar",
        "20g honey",
        "1/2 tsp sea salt",
        "2 slices thick brioche bread",
        "100g condensed milk",
        "Strawberries for topping"
      ]
    },
    instructions: [
      "Whisk butter and brown sugar together for 3-5 minutes until creamed, then add honey and sea salt.",
      "Trim bread edges and create a horizontal pocket in the center without cutting through.",
      "Pipe condensed milk into the bread pocket using a piping bag or ziplock bag.",
      "Spread honey butter mixture over the filled bread, coating all sides.",
      "Cook in a preheated pan on medium heat for 2-3 minutes per side until golden brown.",
      "Top with additional condensed milk and strawberries before serving."
    ],
    tips: ["Use thick-cut brioche for the best pockets.", "Serve immediately while warm and crispy."]
  },
  {
    id: "hot-chocolate-cookies",
    name: "Hot Chocolate Cookies",
    description: "Rich, fudgy chocolate cookies topped with a piece of chocolate and a toasted marshmallow - like hot chocolate in cookie form.",
    category: "Cookies",
    prepTime: "30 min",
    cookTime: "15 min",
    totalTime: "2.5 hrs",
    servings: 12,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
    ingredients: {
      "Cookies": [
        "340g chocolate chips (milk and dark mix)",
        "225g unsalted butter",
        "250g packed brown sugar",
        "3 eggs",
        "1 tsp vanilla essence",
        "180g all-purpose flour",
        "1 tsp baking powder",
        "1 tsp baking soda",
        "10g corn flour",
        "1/2 tsp salt",
        "12 pieces 70% chocolate for topping",
        "12 marshmallows for topping"
      ]
    },
    instructions: [
      "Melt chocolate and butter in microwave using 30-second increments.",
      "Mix flour, baking powder, baking soda, corn flour, and salt separately.",
      "Beat brown sugar, eggs, and vanilla for 2-4 minutes until light and fluffy.",
      "Combine cooled chocolate mixture with egg mixture, then add dry ingredients.",
      "Mix 3-5 minutes until thick batter forms.",
      "Wrap dough in cling film and chill for at least 2 hours.",
      "Preheat oven to 170°C. Shape into equal-sized balls on parchment paper.",
      "Bake 10 minutes until spread, then top each with chocolate and marshmallow.",
      "Bake 2-3 minutes more until marshmallow is toasted."
    ],
    tips: ["The dough must be thoroughly chilled for the right texture.", "Add the marshmallow near the end so it toasts but doesn't melt away."]
  },
  {
    id: "kinder-cake",
    name: "Kinder Cake with Kinder Ganache",
    description: "A rich chocolate cake layered with crushed Kinder Bueno filling and topped with a dramatic Kinder chocolate ganache.",
    category: "Cakes",
    prepTime: "40 min",
    cookTime: "20 min",
    totalTime: "60 min",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
    ingredients: {
      "Cake": [
        "125ml full-fat milk",
        "1 tbsp vinegar",
        "120g all-purpose flour",
        "100g white granulated sugar",
        "100g brown sugar",
        "38g cocoa powder",
        "1 tsp baking powder",
        "3/4 tsp baking soda",
        "1/2 tsp salt",
        "1/2 tsp coffee powder",
        "60ml neutral oil",
        "1 egg",
        "1 tsp vanilla essence",
        "125ml boiling water"
      ],
      "Kinder Ganache": [
        "250g Kinder Maxi chocolate bars, chopped",
        "250ml heavy cream"
      ],
      "Filling": [
        "200ml whipped cream",
        "12 Kinder Bueno Bars, crushed"
      ]
    },
    instructions: [
      "Preheat oven to 180°C. Grease cake pans with butter and flour.",
      "Make buttermilk by adding vinegar to milk; let sit 10 minutes. Add oil, egg, and vanilla.",
      "Combine dry ingredients in separate bowl.",
      "Mix wet and dry ingredients on medium speed.",
      "On low speed, pour boiling water into batter carefully until incorporated.",
      "Bake 20 minutes until toothpick comes out clean.",
      "Make ganache: pour hot cream over chopped chocolate; let sit 2 minutes, then whisk smooth.",
      "Whip cream to medium peaks; fold in crushed Kinder Bueno bars.",
      "Layer cooled cake with Kinder Bueno filling between layers.",
      "Pour warm ganache over the top for a dramatic finish."
    ],
    tips: ["The boiling water makes the cake extra moist.", "Let the ganache cool slightly before pouring for a thicker coating."]
  }
];
