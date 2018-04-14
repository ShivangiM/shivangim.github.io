In this blog post I will try to give interpretation of word "tensor" (from perspective of physics) and explain what are tensor fields.
I will beifly talk about what is difference between the tensors in Data Science world and Physics world.

Before giving any defination of tensor I would like to build the intution of the meaning tensor with an example.

Say you are being pulled by three people, standing at 90 degrees from each other,  simultaneously(let me name them Charly(x), Jony(y) and Danny(z)). 

As the result of this your position is being displaced.

Now this displacement can be either characterized by 
I)   The difference(d)(something like euclidean) in first position(p -> (x,y,z)) and last position(p'->(x',y',z')), the one as a result of pulling.
II)  As the vector which describes difference between x' and x, y'and y, and z' and z i.e[dx, dy, dz].
III) As matrix, 
          [ dxx, dxy, dxz ]
          [ dyx, dyy, dyz ]
          [ dzx, dzy, dzz ]

There are two fundamental questions:
1) Are these three(or in case more than three) representations necessary? Yes.
2) Where is tensor? These all are tensors.

(I)  is a scalar and tensor of order 0. Which means no dimensional factor is being considered in it's representation.
(II) is a vector and tensor of order 1. Which means one dimensional factor is being considered in it's representation i.e. 


#---
#layout: post
#title: "Tensor and Tensor Field"
#date: 2018-04-14
#---
