XORshift.js
===========

simple implementation of the [XORshift](http://en.wikipedia.org/wiki/Xorshift) PRNG (Only the XORshift128 method at the moment, but I plan to add more) in JavaScript.

Example
-------

    >> XORseed(Math.floor(Math.random() * (256 - 1 + 1))); // Random seed, this can be anything, if it isn't set this function will be run the first time you use one of the functions below.
    >> XORshift128();
    1293043013
    >> XORshift128Range(0, 10);
    6
    >> XORshift128Range(0, 10);
    [5, 7, 0, 4, 2, 7, 6, 0, 10, 6]

Dieharder tests
---------------

    #=============================================================================#
    #            dieharder version 3.31.1 Copyright 2003 Robert G. Brown          #
    #=============================================================================#
       rng_name    |           filename             |rands/second|
            mt19937|          XORshift128-BinaryTest|  9.20e+07  |
    #=============================================================================#
            test_name   |ntup| tsamples |psamples|  p-value |Assessment
    #=============================================================================#
       diehard_birthdays|   0|       100|     100|0.25254191|  PASSED  
          diehard_operm5|   0|   1000000|     100|0.69352564|  PASSED  
      diehard_rank_32x32|   0|     40000|     100|0.99534787|   WEAK   
        diehard_rank_6x8|   0|    100000|     100|0.03071854|  PASSED  
       diehard_bitstream|   0|   2097152|     100|0.32615283|  PASSED  
            diehard_opso|   0|   2097152|     100|0.38809718|  PASSED  
            diehard_oqso|   0|   2097152|     100|0.11483090|  PASSED  
             diehard_dna|   0|   2097152|     100|0.11296476|  PASSED  
    diehard_count_1s_str|   0|    256000|     100|0.75183011|  PASSED  
    diehard_count_1s_byt|   0|    256000|     100|0.10131895|  PASSED  
     diehard_parking_lot|   0|     12000|     100|0.24200626|  PASSED  
        diehard_2dsphere|   2|      8000|     100|0.92209614|  PASSED  
        diehard_3dsphere|   3|      4000|     100|0.64667920|  PASSED  
         diehard_squeeze|   0|    100000|     100|0.41360663|  PASSED  
            diehard_sums|   0|       100|     100|0.05815951|  PASSED  
            diehard_runs|   0|    100000|     100|0.81048673|  PASSED  
            diehard_runs|   0|    100000|     100|0.17393806|  PASSED  
           diehard_craps|   0|    200000|     100|0.57722781|  PASSED  
           diehard_craps|   0|    200000|     100|0.13991096|  PASSED  
     marsaglia_tsang_gcd|   0|  10000000|     100|0.33658288|  PASSED  
     marsaglia_tsang_gcd|   0|  10000000|     100|0.18447678|  PASSED  
             sts_monobit|   1|    100000|     100|0.79071764|  PASSED  
                sts_runs|   2|    100000|     100|0.98954146|  PASSED  
              sts_serial|   1|    100000|     100|0.92431765|  PASSED  
              sts_serial|   2|    100000|     100|0.32866482|  PASSED  
              sts_serial|   3|    100000|     100|0.81793338|  PASSED  
              sts_serial|   3|    100000|     100|0.13412344|  PASSED  
              sts_serial|   4|    100000|     100|0.51863035|  PASSED
              sts_serial|   4|    100000|     100|0.49038638|  PASSED  
              sts_serial|   5|    100000|     100|0.56026763|  PASSED  
              sts_serial|   5|    100000|     100|0.96463937|  PASSED  
              sts_serial|   6|    100000|     100|0.86256586|  PASSED  
              sts_serial|   6|    100000|     100|0.25872524|  PASSED  
              sts_serial|   7|    100000|     100|0.75784304|  PASSED  
              sts_serial|   7|    100000|     100|0.90309065|  PASSED  
              sts_serial|   8|    100000|     100|0.96076525|  PASSED  
              sts_serial|   8|    100000|     100|0.78872787|  PASSED  
              sts_serial|   9|    100000|     100|0.40251196|  PASSED  
              sts_serial|   9|    100000|     100|0.95728270|  PASSED  
              sts_serial|  10|    100000|     100|0.80358109|  PASSED  
              sts_serial|  10|    100000|     100|0.92886949|  PASSED  
              sts_serial|  11|    100000|     100|0.40369983|  PASSED  
              sts_serial|  11|    100000|     100|0.38171435|  PASSED  
              sts_serial|  12|    100000|     100|0.40586984|  PASSED  
              sts_serial|  12|    100000|     100|0.35747739|  PASSED  
              sts_serial|  13|    100000|     100|0.83665860|  PASSED  
              sts_serial|  13|    100000|     100|0.37019038|  PASSED  
              sts_serial|  14|    100000|     100|0.96023502|  PASSED  
              sts_serial|  14|    100000|     100|0.98902198|  PASSED  
              sts_serial|  15|    100000|     100|0.99963496|   WEAK   
              sts_serial|  15|    100000|     100|0.75618785|  PASSED  
              sts_serial|  16|    100000|     100|0.59092394|  PASSED  
              sts_serial|  16|    100000|     100|0.74783547|  PASSED  
             rgb_bitdist|   1|    100000|     100|0.52265240|  PASSED  
             rgb_bitdist|   2|    100000|     100|0.78415231|  PASSED  
             rgb_bitdist|   3|    100000|     100|0.71726562|  PASSED  
             rgb_bitdist|   4|    100000|     100|0.96546965|  PASSED  
             rgb_bitdist|   5|    100000|     100|0.03625043|  PASSED  
             rgb_bitdist|   6|    100000|     100|0.91541779|  PASSED  
             rgb_bitdist|   7|    100000|     100|0.51782723|  PASSED
             rgb_bitdist|   8|    100000|     100|0.56841567|  PASSED  
             rgb_bitdist|   9|    100000|     100|0.77291631|  PASSED  
             rgb_bitdist|  10|    100000|     100|0.42464190|  PASSED  
             rgb_bitdist|  11|    100000|     100|0.43598728|  PASSED  
             rgb_bitdist|  12|    100000|     100|0.24310998|  PASSED  
    rgb_minimum_distance|   2|     10000|    1000|0.58033136|  PASSED  
    rgb_minimum_distance|   3|     10000|    1000|0.08819979|  PASSED  
    rgb_minimum_distance|   4|     10000|    1000|0.18418764|  PASSED  
    rgb_minimum_distance|   5|     10000|    1000|0.00770060|  PASSED  
        rgb_permutations|   2|    100000|     100|0.33597615|  PASSED  
        rgb_permutations|   3|    100000|     100|0.78404731|  PASSED  
        rgb_permutations|   4|    100000|     100|0.42967056|  PASSED  
        rgb_permutations|   5|    100000|     100|0.98243275|  PASSED  
          rgb_lagged_sum|   0|   1000000|     100|0.35783654|  PASSED  
          rgb_lagged_sum|   1|   1000000|     100|0.04137681|  PASSED  
          rgb_lagged_sum|   2|   1000000|     100|0.41883603|  PASSED  
          rgb_lagged_sum|   3|   1000000|     100|0.64158350|  PASSED  
          rgb_lagged_sum|   4|   1000000|     100|0.72058694|  PASSED  
          rgb_lagged_sum|   5|   1000000|     100|0.83425270|  PASSED  
          rgb_lagged_sum|   6|   1000000|     100|0.40087503|  PASSED  
          rgb_lagged_sum|   7|   1000000|     100|0.36147021|  PASSED  
          rgb_lagged_sum|   8|   1000000|     100|0.77688074|  PASSED  
          rgb_lagged_sum|   9|   1000000|     100|0.73947575|  PASSED  
          rgb_lagged_sum|  10|   1000000|     100|0.97758523|  PASSED  
          rgb_lagged_sum|  11|   1000000|     100|0.01030655|  PASSED  
          rgb_lagged_sum|  12|   1000000|     100|0.71405608|  PASSED  
          rgb_lagged_sum|  13|   1000000|     100|0.53187846|  PASSED  
          rgb_lagged_sum|  14|   1000000|     100|0.74948922|  PASSED  
          rgb_lagged_sum|  15|   1000000|     100|0.36485424|  PASSED  
          rgb_lagged_sum|  16|   1000000|     100|0.95105581|  PASSED  
          rgb_lagged_sum|  17|   1000000|     100|0.09755262|  PASSED  
          rgb_lagged_sum|  18|   1000000|     100|0.47720120|  PASSED  
          rgb_lagged_sum|  19|   1000000|     100|0.82034816|  PASSED  
          rgb_lagged_sum|  20|   1000000|     100|0.12843461|  PASSED  
          rgb_lagged_sum|  21|   1000000|     100|0.58617626|  PASSED  
         rgb_lagged_sum|  22|   1000000|     100|0.38956604|  PASSED  
          rgb_lagged_sum|  23|   1000000|     100|0.19442850|  PASSED  
          rgb_lagged_sum|  24|   1000000|     100|0.41189216|  PASSED  
          rgb_lagged_sum|  25|   1000000|     100|0.21028219|  PASSED  
          rgb_lagged_sum|  26|   1000000|     100|0.99379145|  PASSED  
          rgb_lagged_sum|  27|   1000000|     100|0.40098577|  PASSED  
          rgb_lagged_sum|  28|   1000000|     100|0.50624842|  PASSED  
          rgb_lagged_sum|  29|   1000000|     100|0.38837397|  PASSED  
          rgb_lagged_sum|  30|   1000000|     100|0.79292741|  PASSED  
          rgb_lagged_sum|  31|   1000000|     100|0.01609694|  PASSED  
          rgb_lagged_sum|  32|   1000000|     100|0.87621549|  PASSED  
         rgb_kstest_test|   0|     10000|    1000|0.08906018|  PASSED  
         dab_bytedistrib|   0|  51200000|       1|0.36452411|  PASSED  
                 dab_dct| 256|     50000|       1|0.79110916|  PASSED  
    Preparing to run test 207.  ntuple = 0
            dab_filltree|  32|  15000000|       1|0.96432302|  PASSED  
            dab_filltree|  32|  15000000|       1|0.94819191|  PASSED  
    Preparing to run test 208.  ntuple = 0
           dab_filltree2|   0|   5000000|       1|0.92365245|  PASSED  
           dab_filltree2|   1|   5000000|       1|0.18716272|  PASSED  
    Preparing to run test 209.  ntuple = 0
            dab_monobit2|  12|  65000000|       1|0.40385112|  PASSED  